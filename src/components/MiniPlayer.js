import React, { useRef, useState } from "react";
import miniPlayerImage from "../assets/images/3.jpg";
import classes from "../styles/MiniPlayer.module.css";

export const MiniPlayer = () => {
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
      <img src={miniPlayerImage} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};
