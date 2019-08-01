import React from "react";
import "./Button.scss";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google_sign_in" : ""} custom_button `}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
