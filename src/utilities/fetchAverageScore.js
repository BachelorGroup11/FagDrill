import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const fetchAverageScore = async (route, setAverageScore) => {
  let numOfResults = 0;
  let allScores = [];

  const q = query(
    collection(db, 'results'),
    where('quiz_id', '==', route.params.id)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    numOfResults += 1;
    allScores.push(doc.data().score / doc.data().total_questions);
  });

  setAverageScore({
    average: calculateAverage(allScores),
    total: numOfResults,
  });
};

const calculateAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
