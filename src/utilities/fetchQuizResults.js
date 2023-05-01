import {
  collection,
  query,
  orderBy,
  limit,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const fetchQuizResults = async (setQuizResults, route) => {
  const quizResultsRef = collection(db, 'results');
  const q = query(
    quizResultsRef,
    where('quiz_id', '==', route.params.quiz), // filter quiz results by quiz ID
    orderBy('score', 'desc'), // sort quiz results in descending order based on score
    limit(3) // only retrieve top 3 quiz results
  );

  const querySnapshot = await getDocs(q);
  let usernames = [];
  querySnapshot.forEach((doc) => {
    usernames.push({ id: doc.data().user_id, score: doc.data().score });
  });

  for (let i = 0; i < usernames.length; i++) {
    const userQuery = query(
      collection(db, 'users'),
      where('user_id', '==', usernames[i].id)
    );

    const userQuerySnapshot = await getDocs(userQuery);
    userQuerySnapshot.forEach((doc) => {
      setQuizResults((prevArray) => [
        ...prevArray,
        { name: doc.data().email, score: usernames[i].score },
      ]);
    });
  }
};
