
import {createContext, useContext, useState} from 'react';
import {useAuthentication, useUser} from "../hooks/apiHooks.js";
import { useLocation, useNavigate } from 'react-router-dom';

export const UserContext = createContext(null);


export const UserProvider = ({children}) => {
  const [user, setUser] = useState(undefined);
  console.log("user in userprovider", user);
  const location = useLocation();

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
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const userResult = await getUserByToken(token);
        console.log("userResult", userResult);
        setUser(userResult.user);
        // when page is refreshed, the user is redirected to origin (see ProtectedRoute.jsx)
        const origin = location.state.from.pathname || '/';
        navigate(origin);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  //TODO remove uset and setuser
  return (
    <UserContext.Provider value={{user, handleLogin, handleLogout, handleAutoLogin}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.defaultProps = {
  children: null,
};


export const useUserContext = () => useContext(UserContext);
