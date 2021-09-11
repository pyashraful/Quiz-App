import React from "react";
import signupImage from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";

export const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
};
