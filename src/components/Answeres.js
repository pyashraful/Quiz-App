import React from "react";
import classes from "../styles/Answeres.module.css";
import { Checkbox } from "./Checkbox";

export const Answeres = (options, handleChange) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
          className={classes.answer}
        />
      ))}
    </div>
  );
};
