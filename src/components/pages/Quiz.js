import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import { useQuestions } from "../../hooks/useQuestions";
import { Answeres } from "../Answeres";
import { MiniPlayer } from "../MiniPlayer";
import { ProgressBar } from "../ProgressBar";

const initialState = null;

function reducer(state, action) {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });

      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      throw new Error(`wrong action type ${action.type}`);
  }
}

export const Quiz = () => {
  const { id } = useParams();
  const { questions, error, loading } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState();

  const [qna, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({
      type: "quistions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionsId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  return (
    <>
      <h1>{qna.title}</h1>
      <h4>Question can have multiple answers</h4>
      <Answeres
        options={qna[currentQuestion].options}
        handleChange={handleAnswerChange}
      />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};
