// Function responsible for handling Play screen logic on answer input
export const updateQuiz = (navigation, answerIdx, state, dispatch) => {
	// If number of answers exceed length of quiz return
	if (state.index >= state.quizLength) {
		return console.log('Quiz Completed');
	}

	// Update state with information on next question
	dispatch({
		type: 'setmulitple',
		payload: {
			index: state.index + 1,
			questionText: state.questionsArray[state.index].question_text,
			options: state.questionsArray[state.index].options,
			correctOption: state.questionsArray[state.index].correct_answer,
		},
	});

	// If answer is correct increment score by one, then refresh screen with updated state
	if (answerIdx === state.correctOption) {
		dispatch({ type: 'setscore', payload: state.score + 1 });
		console.log('Correct answer');
		navigation.navigate('playpage');
	} else {
		console.log('Incorrect answer');
		navigation.navigate('playpage');
	}
};
