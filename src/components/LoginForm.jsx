// LoginForm.jsx
import useForm from "../hooks/formHooks.js";
import {useAuthentication} from "../hooks/apiHooks.js";
import {useNavigate} from "react-router-dom";
import Button from "./UI/Button.jsx";

const LoginForm = () => {
  const {login} = useAuthentication();
  const navigate = useNavigate();

  const initValues = {
    username: "",
    password: "",
  };

  const doLogin = async () => {
    try{
      const userData = await login(inputs);
      localStorage.setItem("token", userData.token);
      navigate('/');

    }catch (e){
      alert(e.message);
    }

  }

  const {handleSubmit, handleInputChange, inputs} = useForm(doLogin, initValues);
  console.log(inputs);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={ handleInputChange }
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={ handleInputChange }
            autoComplete="current-password"
          />
        </div>
        <Button text={"Login"} handleClick={ handleSubmit }/>
      </form>
    </>
  );
};

export default LoginForm;
