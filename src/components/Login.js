import { Button } from "@material-ui/core";
import React from "react";
import "./styles/Login.css";
import { auth, provider, providerFb } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  const fbsignIn = () => {
    auth
      .signInWithPopup(providerFb)
      .then((res) => {
        console.log("token: ", res.credential.accessToken);
        console.log("user: ", res.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/905px-Discord_logo.svg.png"
          alt="Discord"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
      <Button onClick={fbsignIn}>Fb Sign In</Button>
    </div>
  );
}

export default Login;
