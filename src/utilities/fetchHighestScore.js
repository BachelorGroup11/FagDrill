import {
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const fetchHighestScore = async (route, setHighestScore) => {
  let currentHighest = {
    score: 0,
    totalQuestions: 0,
    user: '',
  };

  for (let i = 0; i < route.params.users.length; i++) {
    const q = query(
      collection(db, 'results'),
      where('quiz_id', '==', route.params.id),
      where('user_id', '==', route.params.users[i]),
      orderBy('score', 'desc'),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data().score > currentHighest.score)
        currentHighest = {
          score: doc.data().score,
          user: doc.data().user_id,
          totalQuestions: doc.data().total_questions,
        };
    });
  }

  fetchUsername(currentHighest, setHighestScore);
};

const fetchUsername = async (currentHighest, setHighestScore) => {
  const nameQuery = query(
    collection(db, 'users'),
    where('user_id', '==', currentHighest.user)
  );

  const nameQuerySnapshot = await getDocs(nameQuery);
  nameQuerySnapshot.forEach((doc) =>
    setHighestScore({
      score: currentHighest.score,
      totalQuestions: currentHighest.totalQuestions,
      username: doc.data().email.split('@')[0],
    })
  );
};
