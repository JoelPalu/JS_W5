
import {createContext, useContext, useState} from 'react';
import {useAuthentication, useUser} from "../hooks/apiHooks.js";
import {useNavigate} from "react-router-dom";
import useForm from "../hooks/formHooks.js";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  console.log("user in userprovider", user);

  const {login,} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const handleLogin = async (credentials) => {
    console.log("credentials", credentials);
    try{
      const userData = await login(credentials);
      localStorage.setItem("token", userData.token);
      setUser(userData.user);
      navigate('/');
    }catch (e){
      alert(e.message);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(undefined);
    navigate('/');
  };

  const handleAutoLogin = async () => {
    const token = localStorage.getItem('token');
    if (token){
      try {
        console.log("token", token)
        const userData = await getUserByToken(token);
        setUser(userData.user);
        navigate('/')
      }catch (e){
        console.log(e.message);
      }
    }
  };
  //TODO remove uset and setuser
  return (
    <UserContext.Provider value={{user, setUser, handleLogin, handleLogout, handleAutoLogin}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.defaultProps = {
  children: null,
};


export const useUserContext = () => useContext(UserContext);
