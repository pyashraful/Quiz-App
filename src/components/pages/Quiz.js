import React from "react";
import { Answeres } from "../Answeres";
import { MiniPlayer } from "../MiniPlayer";
import { ProgressBar } from "../ProgressBar";

export const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answeres />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};
