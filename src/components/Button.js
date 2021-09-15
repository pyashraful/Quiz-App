import React from "react";
import classes from "../styles/Button.module.css";

export const Button = ({ className, children, type, ...rest }) => {
  console.log(rest);
  return (
    <button {...rest} type={type} className={`${classes.button} ${className} `}>
      {children}
    </button>
  );
};
