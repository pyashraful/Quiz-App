import React from "react";
import { useAnswers } from "../../hooks/useAnswers";
import { Analysis } from "../Analysis";
import { Summary } from "../Summary";

export const Result = () => {
  const { answers, loading, error } = useAnswers();

  return (
    <>
      <Summary />
      <Analysis />
    </>
  );
};
