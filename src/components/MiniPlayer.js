import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "../styles/MiniPlayer.module.css";

export const MiniPlayer = ({ id, title }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  const [status, setStatus] = useState(false);
  const buttonRef = useRef();

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }

  return (
    <div
      ref={buttonRef}
      onClick={toggleMiniPlayer}
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        controls
        playing={status}
      />
      <p>{title}</p>
    </div>
  );
};
