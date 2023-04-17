import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchQuizzes = async (setQuizzes) => {
	const querySnapshot = await getDocs(collection(db, 'quizzes'));

	querySnapshot.forEach((doc) => {
		setQuizzes((previousArray) => [
			...previousArray,
			{
				id: doc.id,
				name: doc.data().name,
				info: doc.data().info,
				duration: doc.data().duration,
				questions: doc.data().questions,
				users: doc.data().users,
			},
		]);
	});
};
