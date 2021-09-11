import React from "react";
import classes from "../styles/Form.module.css";

export const Form = ({ className, children, ...rest }) => {
  return (
    <form className={`${className} ${classes.form} `} {...rest}>
      {children}
    </form>
  );
};
