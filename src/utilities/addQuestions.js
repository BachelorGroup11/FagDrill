import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export const addQuestions = async (quizRef, questions) => {
	let questionIds = [];

	for (let i = 0; i < questions.length; i++) {
		const questionRef = await addDoc(collection(db, 'questions'), {
			question_text: questions[i].question,
			options: questions[i].options,
			quizzes: [quizRef],
			summary: questions[i].summary,
			correct_answer: questions[i].answer,
			category: questions[i].type,
			image: questions[i].type === 'Image question' ? questions[i].image : null,
		});
		questionIds.push(questionRef.id);
	}

	return questionIds;
};
