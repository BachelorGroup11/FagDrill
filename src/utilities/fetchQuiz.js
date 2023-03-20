import { db } from '../../firebaseConfig';
import { query, getDocs, collection, where } from 'firebase/firestore';

// Gets all questions related to a specific quiz then updates state
export const fetchQuiz = async (quiz, dispatch) => {
	// Query all question documents linked to quiz id
	const questionsQuery = query(
		collection(db, 'questions'),
		where('quizzes', 'array-contains', quiz)
	);

	// Append each question retrieved from database to state
	const querySnapshot = await getDocs(questionsQuery);
	querySnapshot.forEach((doc) => {
		dispatch({ type: 'setquestionsarray', payload: doc.data() });
	});

	// Set quiz state
	dispatch({
		type: 'setmulitple',
		payload: {
			quizLength: querySnapshot.docs.length,
			questionText: querySnapshot.docs[0].data().question_text,
			options: querySnapshot.docs[0].data().options,
			category: querySnapshot.docs[0].data().category,
			correctOption: querySnapshot.docs[0].data().correct_answer,
		},
	});
};
