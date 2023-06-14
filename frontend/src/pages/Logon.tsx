import { useState } from "react";
import NavBar from "../components/NavBar";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import "../Pages Design/Logon.css";

function Logon() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: any) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <NavBar />

      <div className="Logon">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </>
  );
}

export default Logon;
