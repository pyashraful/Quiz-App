import React from "react";
import classes from "../styles/Button.module.css";

export const Button = ({ className, children, type }) => {
  return (
    <button type={type} className={`${classes.button} ${className} `}>
      {children}
    </button>
  );
};
