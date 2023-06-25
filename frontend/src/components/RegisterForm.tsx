import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const REGISTER_URL = "http://localhost:8000/users/register/";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(REGISTER_URL, {
        username: username,
        email: email,
        password: pass,
      })
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        setErrorMessage("Error! Please key in your details correctly.")
      });
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
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@abc.com"
          id="email"
          name="email"
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
          {" "}
          Register{" "}
        </button>
      </form>
      <Link to="/login">
        <button className="registerbutton">
          Already have an account? Log in now.
        </button>
      </Link>
    </div>
  );
};
