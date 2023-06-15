import NavBar from "../components/NavBar";
import { LoginForm } from "../components/LoginForm";
import "../Logon.css";

export default function Login() {
  return (
    <>
      <NavBar />
      <div className="Logon">
        <LoginForm />
      </div>
    </>
  );
}