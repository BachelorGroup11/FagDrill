import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchQuizzes = async (setQuizzes) => {
	const querySnapshot = await getDocs(collection(db, 'quizzes'));

	querySnapshot.forEach((doc) => {
		setQuizzes((previousArray) => [
			...previousArray,
			{
				name: doc.data().name,
				id: doc.id,
				info: doc.data().info,
				questions: doc.data().questions.length,
				users: doc.data().users.length,
			},
		]);
	});
};
