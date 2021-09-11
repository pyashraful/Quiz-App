import React from "react";
import classes from "../styles/Button.module.css";

export const Button = ({ className, children }) => {
  return <div className={`${classes.button} ${className} `}>{children}</div>;
};
