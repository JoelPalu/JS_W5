// imports

import RegisterForm from "../components/RegisterForm.jsx";
import LoginForm from "../components/LoginForm.jsx";

const Logout = () => {
  const HandleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <>
      <h1>Logout</h1>
      <button onClick={HandleLogout}>Logout</button>
    </>
  );
};

export default Logout;
