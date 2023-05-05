import { db } from '../../firebaseConfig';
import { query, getDocs, collection, where } from 'firebase/firestore';

// Gets all questions related to a specific quiz then updates play state
export const fetchQuiz = async (quiz, dispatch) => {
  // Query all question documents linked to quiz id
  const questionsQuery = query(
    collection(db, 'questions'),
    where('quizzes', 'array-contains', quiz)
  );

  const querySnapshot = await getDocs(questionsQuery);
  const filteredLength = parseInt(querySnapshot.docs.length * 0.8);

  let randomIds = [];
  while (randomIds.length < filteredLength) {
    let randomNumber = Math.floor(Math.random() * querySnapshot.docs.length);
    if (randomIds.indexOf(randomNumber) == -1) randomIds.push(randomNumber);
  }

  let index = 0;
  querySnapshot.forEach((doc) => {
    if (randomIds.includes(index))
      dispatch({ type: 'setquestionsarray', payload: doc.data() });
    index += 1;
  });

  dispatch({ type: 'setquizlength', payload: filteredLength });
};
