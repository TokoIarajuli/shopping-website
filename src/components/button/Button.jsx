import React from "react";
import "./Button.scss";

const Button = ({ children, ...otherProps }) => (
  <button className="custom_button" {...otherProps}>
    {children}
  </button>
);

export default Button;
