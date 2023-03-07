// Update index upon answer, and increase score if answer was correct
export const updateQuiz = (answerIdx, state, dispatch) => {
	dispatch({
		type: 'setmulitple',
		payload: {
			index: state.index + 1,
			score: answerIdx == state.correctOption ? state.score + 1 : state.score,
		},
	});
};
