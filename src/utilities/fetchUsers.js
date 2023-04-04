import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchUsers = async (setUsers) => {
	const querySnapshot = await getDocs(collection(db, 'users'));
	querySnapshot.forEach((doc) => {
		setUsers((previousArray) => [
			...previousArray,
			{ email: doc.data().email, id: doc.data().user_id },
		]);
	});
};
