import {
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const fetchUsersHighest = async (route, setHighestScoresArray) => {
  let usersArray = [];

  for (let i = 0; i < route.params.users.length; i++) {
    const q = query(
      collection(db, 'results'),
      where('quiz_id', '==', route.params.id),
      where('user_id', '==', route.params.users[i]),
      orderBy('score', 'desc'),
      limit(1)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty)
      usersArray.push({
        userid: route.params.users[i],
        score: 0,
        totalQuestions: 0,
      });
    else {
      querySnapshot.forEach((doc) =>
        usersArray.push({
          userid: route.params.users[i],
          score: doc.data().score,
          totalQuestions: doc.data().total_questions,
        })
      );
    }
  }

  usersArray.forEach((user) => fetchUsername(user, setHighestScoresArray));
};

const fetchUsername = async (user, setHighestScoresArray) => {
  const nameQuery = query(
    collection(db, 'users'),
    where('user_id', '==', user.userid)
  );

  const nameQuerySnapshot = await getDocs(nameQuery);
  nameQuerySnapshot.forEach((doc) =>
    setHighestScoresArray((prevArr) => [
      ...prevArr,
      {
        username: doc.data().email,
        score: user.score,
        totalQuestions: user.totalQuestions,
      },
    ])
  );
};
