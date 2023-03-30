import { db } from '../../firebaseConfig';
import { collection, query, getDocs, where, limit } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Get all quiz results linked to a specific user from firestore
export const fetchScore = async (setArray) => {
	// Get currently logged in user
	const auth = getAuth();
	const user = auth.currentUser;

	// Query all quiz result documents linked to user id
	const scoreQuery = query(
		collection(db, 'results'),
		where('user_id', '==', user.uid),
		limit(6)
	);

	// Append each score to array
	const querySnapshot = await getDocs(scoreQuery);
	querySnapshot.forEach((doc) => {
		setArray((previousArray) => [...previousArray, doc.data().score]);
	});
};
