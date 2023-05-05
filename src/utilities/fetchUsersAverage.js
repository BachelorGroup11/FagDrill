import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const fetchUsersAverage = async (route, setAverageScoresArray) => {
  let usersArray = [];

  for (let i = 0; i < route.params.users.length; i++) {
    let numOfResults = 0;
    let currentScores = [];

    const q = query(
      collection(db, 'results'),
      where('quiz_id', '==', route.params.id),
      where('user_id', '==', route.params.users[i])
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      numOfResults += 1;
      currentScores.push(doc.data().score / doc.data().total_questions);
    });

    let currentAverage = calculateAverage(currentScores);
    usersArray.push({
      userid: route.params.users[i],
      averageScore: currentAverage,
    });
  }

  usersArray.forEach((user) => fetchUsername(user, setAverageScoresArray));
};

const calculateAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

const fetchUsername = async (user, setAverageScoresArray) => {
  const nameQuery = query(
    collection(db, 'users'),
    where('user_id', '==', user.userid)
  );

  const nameQuerySnapshot = await getDocs(nameQuery);
  nameQuerySnapshot.forEach((doc) =>
    setAverageScoresArray((prevArr) => [
      ...prevArr,
      {
        username: doc.data().email,
        average: Math.trunc(user.averageScore * 100),
      },
    ])
  );
};
