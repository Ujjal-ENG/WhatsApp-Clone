import "./Login.css";
import { Button } from "@material-ui/core";

import { auth, provider } from "../firebase";

export default function Login() {
  const login = () => {
    auth.signInWithRedirect(provider);
  };
  return (
    <div className="app">
      <div className="login">
        <div className="login__container">
          <img src="./login-logo.png" alt="logo" />
          <div className="login__text">
            <h1>Sign in to WhatsApp</h1>
          </div>
          <Button onClick={login}>Sing in With Google</Button>
        </div>
      </div>
    </div>
  );
}
