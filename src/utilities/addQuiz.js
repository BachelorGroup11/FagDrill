import { db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const addQuiz = async (
	title,
	description,
	quizRef,
	userIds,
	questionIds
) => {
	await setDoc(doc(db, "quizzes", quizRef), {
		name: title,
		info: description,
		users: userIds,
		questions: questionIds,
	});
};
