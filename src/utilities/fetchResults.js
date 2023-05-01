import { db } from '../../firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Get all result documents linked to a specific user from firestore
export const fetchResults = async (setResultsArray) => {
	// Get currently logged in user
	const auth = getAuth();
	const user = auth.currentUser;

	// Query all result documents linked to user id
	const resultsQuery = query(
		collection(db, 'results'),
		where('user_id', '==', user.uid)
	);

	// Append each result to array as object containing relevant information
	const querySnapshot = await getDocs(resultsQuery);
	querySnapshot.forEach((doc) => {
		setResultsArray((resultsArray) => [
			...resultsArray,
			{
				name: doc.data().name,
				attempt: doc.data().attempt,
				score: doc.data().score,
				quiz_id: doc.data().quiz_id,
				totalQuestions: doc.data().total_questions,
				date: doc.data().date.toDate(),
			},
		]);
	});
};
