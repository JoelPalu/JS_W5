import {useEffect, useState} from "react";
import {fetchData} from "../lib/fetchData.js";

const useMedia =  () => {
  const [mediaArray, setMediaArray] = useState([]);
  const {getUserById} = useUser();

  const getMedia = async () => {
    const response = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');

    const idToUser= await Promise.all(response.map(
      async (mediaItem) => {
        const userResult = await getUserById(mediaItem.user_id);
        return { ...mediaItem, username: userResult.username }
      }));

    setMediaArray(idToUser);
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

  return {getUserById};
}

export {useMedia, useUser};
