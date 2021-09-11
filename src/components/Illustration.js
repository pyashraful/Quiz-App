import React from "react";
import classes from "../styles/Illustration.module.css";

export const Illustration = ({ image }) => {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
};
