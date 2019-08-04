import React from "react";

import "./SignInAndUp.scss";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const SignInAndUp = () => (
  <div className="Sign_in_and_up_container">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndUp;
