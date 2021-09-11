import React from "react";
import classes from "../styles/Button.module.css";

export const Button = ({ children }) => {
  return (
    <div className={classes.button}>
      <span>{children}</span>
    </div>
  );
};
