import { get, getDatabase, orderByKey, query, ref } from "@firebase/database";
import { useEffect, useState } from "react";

export const useQuestions = (videoId) => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchQuestion() {
      const db = getDatabase();
      const answerRef = ref(db, `answers/${videoId}/questions`);
      const answersQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answersQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
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

  console.log(answers);
  return { answers, loading, error };
};
