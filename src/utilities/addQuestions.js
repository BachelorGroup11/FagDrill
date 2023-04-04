import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export const addQuestions = async (quizRef, questions) => {
	let questionIds = [];

	for (let i = 0; i < questions.length; i++) {
		const questionRef = await addDoc(collection(db, 'questions'), {
			question_text: questions[i].question,
			options: questions[i].options,
			quizzes: [quizRef.id],
			correct_answer:
				questions[i].type === 'Multiple choice'
					? parseInt(questions[i].answer)
					: questions[i].answer,
			category:
				questions[i].type === 'True or false'
					? 'true_or_false'
					: questions[i].type === 'Multiple choice'
					? 'multiple_choice'
					: 'fill_in_blank',
		});
		questionIds.push(questionRef.id);
	}
	return questionIds;
};
