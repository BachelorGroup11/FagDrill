// Function responsible for handling Play screen logic on answer input
export const updateQuiz = (answerIdx, state, dispatch) => {
	// When all questions have been answered, display result
	if (state.index >= state.quizLength) {
		return dispatch({
			type: 'setquestiontext',
			payload: `Du har fullførten quizen. Du fikk ${state.score} riktige av ${state.quizLength} mulige`,
		});
	}

	// Update state with information on next question, and increase score if answer was correct
	dispatch({
		type: 'setmulitple',
		payload: {
			index: state.index + 1,
			score: answerIdx == state.correctOption ? state.score + 1 : state.score,
			questionText: state.questionsArray[state.index].question_text,
			options: state.questionsArray[state.index].options,
			correctOption: state.questionsArray[state.index].correct_answer,
		},
	});
};
