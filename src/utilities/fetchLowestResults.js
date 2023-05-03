import { getAuth } from 'firebase/auth';
import {
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const fetchLowestResults = async (quizzes, setRecommendedQuizzes) => {
  const auth = getAuth();
  const user = auth.currentUser;
  let results = [];

  for (let i = 0; i < quizzes.length; i++) {
    // Query all quiz result documents linked to user id and quiz id
    const scoreQuery = query(
      collection(db, 'results'),
      where('user_id', '==', user.uid),
      where('quiz_id', '==', quizzes[i].id),
      orderBy('date', 'desc'),
      limit(5)
    );

    // Append each score to array
    let totalscores = [];
    const querySnapshot = await getDocs(scoreQuery);
    querySnapshot.forEach((doc) => {
      totalscores.push(doc.data().score);
    });

    const averageScore =
      totalscores.reduce((a, b) => a + b, 0) / totalscores.length || 0;
    const idAndScore = { ...quizzes[i], score: averageScore };
    results.push(idAndScore);
  }

  results.sort((a, b) => a.score - b.score);
  setRecommendedQuizzes([results[0], results[1], results[2]]);
};
