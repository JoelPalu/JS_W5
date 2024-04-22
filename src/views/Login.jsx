// imports

import RegisterForm from "../components/RegisterForm.jsx";
import LoginForm from "../components/LoginForm.jsx";
import useForm from "../hooks/formHooks.js";
import {useState} from "react";
import Button from "../components/UI/Button.jsx";

const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);
  const toggle = () => {
    setToggleForm(!toggleForm);
  }

  return (
    <>
      {toggleForm ? <LoginForm/> : <RegisterForm/>}
      <Button text={toggleForm ? "Register" : "Login"} handleClick={toggle}/>

    </>
  );
};

export default Login;
