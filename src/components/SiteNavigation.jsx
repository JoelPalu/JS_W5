import { Link} from "react-router-dom"
import Button from "./UI/Button.jsx";
import {useUserContext} from "../contexts/UserContext.jsx";

const SiteNavigation = () => {
  const {user, handleLogout} = useUserContext();
  return(
    <div>
      <header>
        <nav>
          <Link to="/">Etusivu 🏠</Link>
          {!user && <Link to="/login">Login</Link> }
          {user &&
            <>
              <Link to="/profile">Profiili 😃</Link>
              <Link to="/upload">Upload</Link>
              <Button text={"Logout"} handleClick={handleLogout}/>
            </>}

        </nav>
      </header>
    </div>
  )
}

export default SiteNavigation
