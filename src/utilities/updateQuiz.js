// Function responsible for handling Play screen logic on answer input
export const updateQuiz = (answerIdx, state, dispatch) => {
	// When all questions have been answered, display result
	//if (state.index >= state.quizLength) {
	//	return dispatch({
	//		type: 'setquestiontext',
	//		payload: `Du har fullførten quizen. Fortsett for å se resultatet ditt.`,
	//	});
	//}

	if (state.index >= state.quizLength) {
		return dispatch({
			type: 'setmultiple',
			payload: {
				index: state.index + 1,
				questionText: `Du har fullførten quizen. Fortsett for å se resultatet ditt.`,
			},
		});
	}

	// Update state with information on next question, and increase score if answer was correct
	dispatch({
		type: 'setmulitple',
		payload: {
			index: state.index + 1,
			score: answerIdx == state.correctOption ? state.score + 1 : state.score,
		},
	});
};
