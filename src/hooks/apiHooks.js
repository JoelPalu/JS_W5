import {useEffect, useState} from "react";
import {fetchData} from "../lib/fetchData.js";

const useMedia =  () => {
  const [mediaArray, setMediaArray] = useState([]);
  const {getUserById} = useUser();

  const getMedia = async () => {
    try {


      const response = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');

      const idToUser = await Promise.all(response.map(
        async (mediaItem) => {
          const userResult = await getUserById(mediaItem.user_id);
          return {...mediaItem, username: userResult.username}
        }));

      setMediaArray(idToUser);
    }catch (e){
    //console.error(e);
    }
  }

  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};

const useUser = () => {
  const getUserById = async (id) => {
    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/' + id,
    );
    return userResult;
  };

  const getUserByToken = async (token) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
    };

    const response = await fetchData(import.meta.env.VITE_AUTH_API + '/users/token/',
      options,
    );
    return response;
  };
  const register = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(inputs),
    };

    const response = await fetchData(import.meta.env.VITE_AUTH_API + '/users',
      options,
      );
    console.log(response)
    return response;
  }

  return {getUserById, getUserByToken, register};
}


const useAuthentication = () => {
  const login = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(inputs),
    };

    const response = await fetchData(import.meta.env.VITE_AUTH_API + '/auth/login',
      options,
      );
    return response;
  };
  return {login};
}

export {useMedia, useUser, useAuthentication};
