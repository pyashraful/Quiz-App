// import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
// import { useEffect, useState } from "react";

// export const useVideosList = () => {
//   const [vidoes, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   // useEffect(() => {
//   //   async function fatchVideos() {
//   //     const db = getDatabase();
//   //     const videoRef = ref(db, "videos");
//   //     const VideoQuery = query(videoRef, orderByKey());

//   //     try {
//   //       setLoading(false);
//   //       setError(false);
//   //       const snapshot = await get(VideoQuery);
//   //       if (snapshot.exists()) {
//   //         setLoading(false);
//   //         console.log(snapshot.val());
//   //         setVideos((preVideos) => [
//   //           ...preVideos,
//   //           ...Object.values(snapshot.val()),
//   //         ]);
//   //       }
//   //     } catch (err) {
//   //       console.log(err);
//   //       setLoading(false);
//   //       setError(true);
//   //     }
//   //   }

//   //   fatchVideos();
//   // }, []);

//   useEffect(() => {
//     async function fetchVideos() {
//       // database related works
//       const db = getDatabase();
//       const videosRef = ref(db, "videos");
//       const videoQuery = query(videosRef, orderByKey());

//       try {
//         setError(false);
//         setLoading(true);
//         // request firebase database
//         const snapshot = await get(videoQuery);
//         setLoading(false);
//         if (snapshot.exists()) {
//           setVideos((prevVideos) => {
//             return [...prevVideos, ...Object.values(snapshot.val())];
//           });
//         } else {
//         }
//       } catch (err) {
//         console.log(err);
//         setLoading(false);
//         setError(true);
//       }
//     }

//     fetchVideos();
//   }, []);

//   return {
//     vidoes,
//     loading,
//     error,
//   };
// };

import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      // database related works
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      console.log(videosRef);
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
}
