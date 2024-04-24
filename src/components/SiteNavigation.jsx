import { Link} from "react-router-dom"
import Button from "./UI/Button.jsx";
import {useUserContext} from "../contexts/UserContext.jsx";

const SiteNavigation = () => {
  const {handleLogout} = useUserContext();
  return(
    <div>
      <header>
        <nav>
          <Link to="/">Etusivu 🏠</Link>
          <Link to="/profile">Profiili 😃</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/login">Login</Link>
          <Button text={"Logout"} handleClick={() => {
            handleLogout();
            console.log("logout")
          } }/>
        </nav>
      </header>
    </div>
  )
}

export default SiteNavigation
