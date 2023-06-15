import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Logon.css";
const LOGIN_URL = "https://django-backend-p3s7.onrender.com/users/login/";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {  
    e.preventDefault();
    axios.post(LOGIN_URL, {
      username: username,
      password: pass,
    })
    .then((response) => {
      console.log(response)
      navigate("/createtourney")
    })
    .catch(() => {
      setErrorMessage("Error! Please key in your details correctly.")
    })
  };

  return (
    <div className="loginregister">
      {errorMessage && <div className="alert alert-danger"> {errorMessage} </div>}
      <form className="loginregister" onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          id="username"
          name="username"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          type="password"
          onChange={(e) => setPass(e.target.value)}
          placeholder="********"
          id="password"
          name="password"
        />
        <button className="button" type="submit">
          Login
        </button>
      </form>
      <Link to="/register">
        <button className="registerbutton">
          Don't have an account? Register now.
        </button>
      </Link>
    </div>
  );
};
