import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchQuestions = async (setQuestions, route) => {
	const querySnapshot = await getDocs(collection(db, 'questions'));
	querySnapshot.forEach((doc) => {
		if (route.params.questions.includes(doc.id)) {
			setQuestions((previousArray) => [
				...previousArray,
				{
					id: doc.id,
					question: doc.data().question_text,
					options: doc.data().options,
					type: doc.data().category,
					answer: doc.data().correct_answer,
					summary: doc.data().summary,
					image: doc.data().image,
				},
			]);
		}
	});
};
