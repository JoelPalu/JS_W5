
import {createContext, useContext, useState} from 'react';
import {useAuthentication} from "../hooks/apiHooks.js";
import {useNavigate} from "react-router-dom";
import useForm from "../hooks/formHooks.js";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  console.log("user in userprovider", user);

  const {login} = useAuthentication();
  const navigate = useNavigate();
  const handleLogin = async (credentials) => {
    console.log("credentials", credentials);
    try{
      const userData = await login(credentials);
      localStorage.setItem("token", userData.token);
      navigate('/');
    }catch (e){
      alert(e.message);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <UserContext.Provider value={{user, setUser, handleLogin, handleLogout}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.defaultProps = {
  children: null,
};


export const useUserContext = () => useContext(UserContext);
