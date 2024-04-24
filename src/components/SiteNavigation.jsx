import { Link} from "react-router-dom"
import Button from "./UI/Button.jsx";
import {useUserContext} from "../contexts/UserContext.jsx";
import {useEffect} from "react";

const SiteNavigation = () => {
  const {user, handleLogout, handleAutoLogin} = useUserContext();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAutoLogin();
    }
  }, []);
  return(
    <div>
      <header>
        <nav>
          <Link to="/">Etusivu 🏠</Link>
          <Link to="/profile">Profiili 😃</Link>
          <Link to="/upload">Upload</Link>
          {!user && <Link to="/login">Login</Link> }
          {user && <Button text={"Logout"} handleClick={handleLogout} />}

        </nav>
      </header>
    </div>
  )
}

export default SiteNavigation
