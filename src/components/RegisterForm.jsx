// RegisterForm.jsx
import useForm from "../hooks/formHooks.js";
import { useUser} from "../hooks/apiHooks.js";
import Button from "./UI/Button.jsx";

const RegisterForm = () => {
  const {register} = useUser();

  const initValues = {
    username: "",
    password: "",
    email: "",
  };

  const doRegister = async () => {
    try{
      const userData = await register(inputs);

    }catch (e){
      alert(e.message);
    }

  }

  const {handleSubmit, handleInputChange, inputs} = useForm(doRegister, initValues);
  console.log(inputs);

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="registeruser">Email</label>
          <input
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
          />
        </div>
        <Button text={"Register"} handleClick={handleSubmit}/>
      </form>
    </>
  );
};

export default RegisterForm;
