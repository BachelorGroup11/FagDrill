import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetcQuizCategoryPlaceholder = async (setCategory, route) => {
  const querySnapshot = await getDocs(collection(db, 'quizzes'));
  let plasecategory = [];
  querySnapshot.forEach((doc) => {
    if (route.params.id === doc.id) {
      plasecategory = doc.data().category;
    }
  });
  setCategory(plasecategory);
};
