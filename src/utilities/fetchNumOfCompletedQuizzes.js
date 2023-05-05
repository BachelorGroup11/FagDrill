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
  setPercentageCompleted,
  setCompletedUsers
) => {
  let completed = 0;
  let completedUsers = [];

  for (let i = 0; i < route.params.users.length; i++) {
    const q = query(
      collection(db, 'results'),
      where('user_id', '==', route.params.users[i]),
      where('quiz_id', '==', route.params.id),
      orderBy('date', 'desc'),
      limit(1)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      completed += 1;
      completedUsers.push({ userid: route.params.users[i], completed: true });
    } else
      completedUsers.push({ userid: route.params.users[i], completed: false });
  }

  setPercentageCompleted(completed / route.params.users.length);

  completedUsers.forEach((user) => {
    fetchUsername(user, setCompletedUsers);
  });
};

const fetchUsername = async (user, setCompletedUsers) => {
  const nameQuery = query(
    collection(db, 'users'),
    where('user_id', '==', user.userid)
  );

  const nameQuerySnapshot = await getDocs(nameQuery);
  nameQuerySnapshot.forEach((doc) =>
    setCompletedUsers((prevArr) => [
      ...prevArr,
      {
        username: doc.data().email,
        completed: user.completed,
      },
    ])
  );
};
