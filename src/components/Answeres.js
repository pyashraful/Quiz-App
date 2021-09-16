import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from "../styles/Answeres.module.css";
import { Checkbox } from "./Checkbox";

export const Answeres = ({ options = [], handleChange, input }) => {
  console.log(options);
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
              className={classes.answer}
            />
          ) : (
            <Checkbox
              text={option.title}
              value={index}
              defaultChecked={option.checked}
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};
