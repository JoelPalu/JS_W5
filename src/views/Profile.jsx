import {Link} from "react-router-dom";
import {useUser} from "../hooks/apiHooks.js";
import {useEffect} from "react";
import {UserProvider, useUserContext} from "../contexts/UserContext.jsx";
import UserData from "../components/UserData.jsx";
import Button from "../components/UI/Button.jsx";

export const Profile = () => {

  return <div>
    <h2 className={"text-5xl font-bold"}>♨︎_♨︎</h2>
    <p><Link to={'/'}> mennään takasi</Link> </p>
    <div>
      <UserData/>
  </div>
</div>
}



