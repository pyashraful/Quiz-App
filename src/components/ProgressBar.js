import React, { useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import { Button } from "./Button";

export const ProgressBar = ({ progress, submit, next, prev }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }

  return (
    <div className={classes.progressBar}>
      <div onClick={prev} className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div ref={tooltipRef} className={classes.tooltip}>
          {progress}% Cimplete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>

      <Button
        onClick={progress === 100 ? submit : next}
        className={classes.next}
      >
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};
