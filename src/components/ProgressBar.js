import React from "react";
import classes from "../styles/ProgressBar.module.css";
import { Button } from "./Button";

export const ProgressBar = ({ progress, next, prev }) => {
  return (
    <div className={classes.progressBar}>
      <div onClick={prev} className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress}% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <Button onClick={next} className={classes.next}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};
