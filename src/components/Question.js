import React from "react";
import classes from "../styles/Question.module.css";
import { Answeres } from "./Answeres";

export const Question = ({ answers = [] }) => {
  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answeres input={false} options={answer.options} />
    </div>
  ));
};
