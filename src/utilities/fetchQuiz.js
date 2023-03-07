import { db } from '../../firebaseConfig';
import { query, getDocs, collection, where } from 'firebase/firestore';

// Gets all questions related to a specific quiz then updates state
export const fetchQuiz = async (quiz, dispatch) => {
	const questionsQuery = query(
		collection(db, 'questions'),
		where('quizzes', 'array-contains', quiz)
	);

	const querySnapshot = await getDocs(questionsQuery);
	// Append each question retrieved from database to state
	querySnapshot.forEach((doc) => {
		dispatch({ type: 'setquestionsarray', payload: doc.data() });
	});

	// Update remaining state information responsible for rendering text and handling logic
	dispatch({
		type: 'setmulitple',
		payload: {
			quizLength: querySnapshot.docs.length,
			questionText: querySnapshot.docs[0].data().question_text,
			options: querySnapshot.docs[0].data().options,
			correctOption: querySnapshot.docs[0].data().correct_answer,
		},
	});
};
