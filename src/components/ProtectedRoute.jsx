// ProtectedRoute.jsx
import {Navigate, useLocation} from 'react-router-dom';
import {useUserContext} from "../hooks/contextHooks.js";


const ProtectedRoute = ({ children }) => {
  const {user} = useUserContext();
  const location = useLocation();

  if (!user) {
    console.log("location", location)
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
