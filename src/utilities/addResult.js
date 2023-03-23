import { db } from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

// Create new document in results collection and push result
export const addResult = async (state, quiz, number, nav) => {
	const auth = getAuth();
	const user = auth.currentUser;

	await addDoc(collection(db, 'results'), {
		name: `Quiz ${number}`,
		quiz_id: quiz,
		score: state.score,
		total_questions: state.quizLength,
		user_id: user.uid,
		attempt: 1,
		date: Timestamp.now(),
	});
	nav.navigate('resultspage');
};
