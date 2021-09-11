import React from "react";
import classes from "../styles/Answeres.module.css";
import { Checkbox } from "./Checkbox";

export const Answeres = () => {
  return (
    <div className={classes.answers}>
      <Checkbox text="test answer" className={classes.answer} />
      <Checkbox text="test answer" className={classes.answer} />
      <Checkbox text="test answer" className={classes.answer} />
    </div>
  );
};
