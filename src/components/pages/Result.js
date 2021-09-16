import _ from "lodash";
import React from "react";
import { useHistory, useParams } from "react-router";
import { useAnswers } from "../../hooks/useAnswers";
import { Analysis } from "../Analysis";
import { Summary } from "../Summary";

export const Result = () => {
  const { id } = useParams();
  const { location } = useHistory();
  const { state } = location;
  const qna = state;
  const { answers, loading, error } = useAnswers(id);

  function calculate() {
    let score = 0;
    answers.forEach((question, questionIndex) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, optionIndex) => {
        if (option.correct) correctIndexes.push(optionIndex);
        if (qna[questionIndex].options[optionIndex].checked) {
          checkedIndexes.push(optionIndex);
          option.checked = true;
        }
      });
      console.log(correctIndexes);
      console.log(checkedIndexes);
      if (_.isEqual(correctIndexes, checkedIndexes)) {
        console.log("ok");
        return (score += 1);
      }
    });
    return score;
  }
  console.log(answers);
  const userScore = calculate();
  console.log(userScore);

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>There was an error</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
};
