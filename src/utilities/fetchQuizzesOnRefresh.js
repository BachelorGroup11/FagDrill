import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const fetchQuizzesOnRefresh = async (setQuizzes, user) => {
    setQuizzes([]);
    const quizQuery = query(
      collection(db, 'quizzes'),
      where('users', 'array-contains', user.uid)
    );

    const querySnapshot = await getDocs(quizQuery);
    querySnapshot.forEach((doc) => {
      setQuizzes((prevArray) => [
        ...prevArray,
        {
          id: doc.id,
          name: doc.data().name,
          duration: doc.data().duration,
          category: doc.data().category,
          totalQuestions: doc.data().questions.length,
        },
      ]);
    }); 
};
