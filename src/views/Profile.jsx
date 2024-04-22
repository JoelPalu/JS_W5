import {Link} from "react-router-dom";
import {useUser} from "../hooks/apiHooks.js";
import {useEffect, useState} from "react";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();


  const getUser = async () => {
    const token = localStorage.getItem('token');
    const userData = await getUserByToken(token);
    setUser(userData.user);
  }
  useEffect(() => {
    getUser();
  }, []);
  return <div>
    <h2 className={"text-5xl font-bold"}>Hello</h2>
    <p><Link to={'/'}> mennään takasi</Link> </p>
    <div>
      {user && <><h2 className={"text-3xl text-blue-100"}>User data</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Created: {new Date(user.created_at).toLocaleString('fi-FI')}</p>
      </>}
  </div>
</div>
}



