import { db } from "../../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  limit,
  orderBy,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Get all quiz results linked to a specific user and quiz ID from firestore
export const fetchScore = async (setArray, quizId) => {
  // Get currently logged in user
  const auth = getAuth();
  const user = auth.currentUser;

  // Query all quiz result documents linked to user id and quiz id
  const scoreQuery = query(
    collection(db, "results"),
    where("user_id", "==", user.uid),
    where("quiz_id", "==", quizId),
    orderBy("date", "desc"),
    limit(5)
  );

  // Append each score to array
  const querySnapshot = await getDocs(scoreQuery);
  querySnapshot.forEach((doc) => {
    setArray((previousArray) => [...previousArray, doc.data().score]);
  });
};
