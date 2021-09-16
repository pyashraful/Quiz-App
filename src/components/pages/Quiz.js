import { getDatabase, ref, set } from "@firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useAuth } from "../../contexts/authContext";
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { currentUser } = useAuth();
  const history = useHistory();

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  function nextQuestion() {
    console.log("invok");
    console.log(currentQuestion);
    console.log(questions.length);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
      console.log(currentQuestion);
    }
  }

  function prevQuestions() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  const percentage =
    currentQuestion > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  async function submit() {
    //
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    history.push({
      pathname: `/result/${id}`,
      state: qna,
    });
  }

  console.log(`qna is ${qna}`);
  return (
    <>
      {loading && <div>loading...</div>}
      {error && <div>loading...</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          {console.log(qna[currentQuestion].options)}
          <Answeres
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            progress={percentage}
            next={nextQuestion}
            submit={submit}
            prev={prevQuestions}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
};
