import {
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const fetchProgress = async (route, setRecentProgress) => {
  let allScores = [];

  const q = query(
    collection(db, 'results'),
    where('quiz_id', '==', route.params.id),
    orderBy('date', 'desc'),
    limit(10)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    allScores.push(doc.data().score);
  });

  setRecentProgress(allScores);
};
