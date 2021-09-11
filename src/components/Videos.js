import React from "react";
import classes from "../styles/Videos.module.css";
import { Video } from "./Video";
export const Videos = () => {
  return (
    <div className={classes.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};
