import {
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const fetchNumOfCompletedQuizzes = async (
  route,
  setPercentageCompleted
) => {
  let completed = 0;

  for (let i = 0; i < route.params.users.length; i++) {
    const q = query(
      collection(db, 'results'),
      where('user_id', '==', route.params.users[i]),
      where('quiz_id', '==', route.params.id),
      orderBy('date', 'desc'),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (!querySnapshot.empty) completed += 1;
    });
  }
  setPercentageCompleted(completed / route.params.users.length);
};
