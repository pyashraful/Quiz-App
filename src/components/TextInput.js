import React from "react";
import classes from "../styles/TextInput.module.css";

export const TextInput = ({ icon, ...rest }) => {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span class="material-icons-outlined"> {icon} </span>
    </div>
  );
};
