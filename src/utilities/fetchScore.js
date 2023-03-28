import { db } from "../../firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Get all quiz results linked to a specific user from firestore
export const fetchResults = async (setResultsArray) => {
  // Get currently logged in user
  const auth = getAuth();
  const user = auth.currentUser;

  // Query all quiz result documents linked to user id
  const resultsQuery = query(
    collection(db, "results"),
    where("user_id", "==", user.uid)
  );

  // Append each score to array
  const querySnapshot = await getDocs(resultsQuery);
  const scores = [];
  querySnapshot.forEach((doc) => {
    scores.push(doc.data().score);
  });
  setResultsArray(scores);
};
