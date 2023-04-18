import React from "react";
import "./GoogleAuth.css";
import G_LOGO from "../../../assets/images/G_Logo.png";
import { IoLogoApple } from "react-icons/io";

const GoogleAuth = () => {
  const googleAuth = () => {
    window.open("https://google-auth-board-listed.cyclic.app/auth/google/callback", "_self");
  };

  return (
    <div className="google-auth-buttons">
      <button className="button-g-auth" onClick={googleAuth}>
        <img src={G_LOGO} alt="G_Logo" />
        Sign in with Google
      </button>

      <button className="apple-g-auth">
        <IoLogoApple className="apple-icon" />
        Sign in with Apple
      </button>
    </div>
  );
};

export default GoogleAuth;
