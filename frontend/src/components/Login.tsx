import { useState } from "react";
import "../Logon.css";

export const Login = (props: any) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="loginregister">
      <form className="loginregister" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="yeozongyao@gmail.com"
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
          Login
        </button>
      </form>
      <button
        className="registerbutton"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register now.
      </button>
    </div>
  );
};
