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
