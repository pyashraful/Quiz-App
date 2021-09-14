import React from "react";
import { Link } from "react-router-dom";
import useVideosList from "../hooks/useVideosList";
import classes from "../styles/Videos.module.css";
import { Video } from "./Video";

export const Videos = () => {
  const { videos, loading, error } = useVideosList();
  console.log(videos);
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to={"/quiz"} key="videos.youtubeID">
            <Video />
          </Link>
        ))}
      {!loading && videos.length === 0 && <p>no data found</p>}
      {error && <p>there was an error</p>}
    </div>
  );
};
