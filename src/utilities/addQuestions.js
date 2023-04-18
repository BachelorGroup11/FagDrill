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
			correct_answer:
				questions[i].type === 'Multiple choice'
					? parseInt(questions[i].answer)
					: questions[i].answer,
			category:
				questions[i].type === 'True or false'
					? 'true_or_false'
					: questions[i].type === 'Multiple choice'
					? 'multiple_choice'
					: questions[i].type === 'Fill in the blank'
					? 'fill_in_blank'
					: 'Image question',
			image: questions[i].type === 'Image question' ? questions[i].image : null,
		});
		questionIds.push(questionRef.id);
	}
	return questionIds;
};