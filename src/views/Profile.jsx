import {Link} from "react-router-dom";
import UserData from "../components/UserData.jsx";


export const Profile = () => {

  return <div>
    <h2 className={"text-5xl font-bold"}>♨︎_♨︎</h2>
    <p><Link to={'/'}> mennään takasi</Link> </p>
    <div>
      <UserData/>
  </div>
</div>
}



