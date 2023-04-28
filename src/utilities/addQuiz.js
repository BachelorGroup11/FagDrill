import { db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const addQuiz = async (
  title,
  description,
  duration,
  quizRef,
  userIds,
  questionIds
) => {
  await setDoc(doc(db, "quizzes", quizRef), {
    name: title,
    info: description,
    duration: duration,
    users: userIds,
    questions: questionIds,
    category: category,
  });
};
