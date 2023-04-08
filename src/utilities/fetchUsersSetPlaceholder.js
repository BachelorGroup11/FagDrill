import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const fetchUsersSetPlaceholder = async (
	setUsers,
	setPlaceholder,
	route
) => {
	const querySnapshot = await getDocs(collection(db, "users"));
	let emails = [];
	querySnapshot.forEach((doc) => {
		setUsers((previousArray) => [
			...previousArray,
			{ email: doc.data().email, id: doc.data().user_id },
		]);
		if (route.params.users.includes(doc.data().user_id)) {
			emails.push(doc.data().email);
		}
	});
	setPlaceholder(emails);
};
