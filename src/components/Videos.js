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
          <Link to={"/quiz"}>
            <Video />
          </Link>
        ))}
      {!loading && videos.length === 0 && <p>no data found</p>}
      {error && <p>there was an error</p>}
    </div>
  );
};

// import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { Link } from "react-router-dom";
// import useVideoList from "../hooks/useVideosList";
// import { Video } from "./Video";

// export default function Videos() {
//   const [page, setPage] = useState(1);
//   const { loading, error, videos, hasMore } = useVideoList(page);

//   return (
//     <div>
//       {videos.length > 0 && (
//         <InfiniteScroll
//           dataLength={videos.length}
//           hasMore={hasMore}
//           next={() => setPage(page + 8)}
//         >
//           {videos.map((video) =>
//             video.noq > 0 ? (
//               <Link to="/quiz" key={video.youtubeID}>
//                 <Video
//                   title={video.title}
//                   id={video.youtubeID}
//                   noq={video.noq}
//                 />
//               </Link>
//             ) : (
//               <Video title={video.title} id={video.youtubeID} noq={video.noq} />
//             )
//           )}
//         </InfiniteScroll>
//       )}
//       {!loading && videos.length === 0 && <div>No data found!</div>}
//       {error && <div>There was an error!</div>}
//       {loading && <div>Loading...</div>}
//     </div>
//   );
// }
