import { get, getDatabase, orderByKey, query, ref } from "@firebase/database";
import { useEffect, useState } from "react";

export const useQuestions = (videoId) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchQuestion() {
      const db = getDatabase();
      const quizref = ref(db, `quiz/${videoId}/questions`);
      const questionQuery = query(quizref, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(questionQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchQuestion();
  }, [videoId]);

  console.log(questions);
  return { questions, loading, error };
};

// import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
// import { useEffect, useState } from "react";

// export default function useQuestions(videoID) {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     async function fetchQuestions() {
//       // database related works
//       const db = getDatabase();
//       const quizRef = ref(db, "quiz/" + videoID + "/questions");
//       const quizQuery = query(quizRef, orderByKey());

//       try {
//         setError(false);
//         setLoading(true);
//         // request firebase database
//         const snapshot = await get(quizQuery);
//         setLoading(false);
//         if (snapshot.exists()) {
//           setQuestions((prevQuestions) => {
//             return [...prevQuestions, ...Object.values(snapshot.val())];
//           });
//         }
//       } catch (err) {
//         console.log(err);
//         setLoading(false);
//         setError(true);
//       }
//     }

//     fetchQuestions();
//   }, [videoID]);

//   return {
//     loading,
//     error,
//     questions,
//   };
// }
