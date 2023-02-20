export const updateQuiz = (navigation, answerIdx, state, dispatch) => {
	if (state.index >= state.quizLength) {
		return console.log('Quiz Completed');
	}

	dispatch({
		type: 'setmulitple',
		payload: {
			index: state.index + 1,
			questionText: state.questionsArray[state.index].question_text,
			options: state.questionsArray[state.index].options,
			correctOption: state.questionsArray[state.index].correct_answer,
		},
	});

	if (answerIdx === state.correctOption) {
		dispatch({ type: 'setscore', payload: state.score + 1 });
		console.log('Correct answer');
		navigation.navigate('playpage');
	} else {
		console.log('Incorrect answer');
		navigation.navigate('playpage');
	}
};
