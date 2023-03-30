import { db } from "../../firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const fetchDate = async (setArray, quizId) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const dateQuery = query(
    collection(db, "results"),
    where("user_id", "==", user.uid),
    where("quiz_id", "==", quizId)
  );

  const querySnapshot = await getDocs(dateQuery);
  querySnapshot.forEach((doc) => {
    const date = doc.data().date.toDate();
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "numeric",
    });
    setArray((previousArray) => [...previousArray, formattedDate]);
  });
};
