export const INITIAL_STATE = {
	questionsArray: [],
	quizLength: 0,
	questionText: null,
	options: [],
	correctOption: -1,
	index: 0,
	score: 0,
	selected: -1,
	isLoading: true,
};

// State containing all necessary information for Play screen
export const QuizReducer = (state, action) => {
	switch (action.type) {
		case 'setquestionsarray':
			return {
				...state,
				questionsArray: [...state.questionsArray, action.payload],
			};
		case 'setquizlength':
			return {
				...state,
				quizLength: action.payload,
			};
		case 'setoptions':
			return {
				...state,
				options: action.payload,
			};
		case 'setcorrectoption':
			return {
				...state,
				correctOption: action.payload,
			};
		case 'setquestiontext':
			return {
				...state,
				questionText: action.payload,
			};
		case 'setindex':
			return {
				...state,
				index: action.payload,
			};
		case 'setscore':
			return {
				...state,
				score: action.payload,
			};
		case 'setseleced':
			return {
				...state,
				selected: action.payload,
			};
		case 'setisloading':
			return {
				...state,
				isLoading: action.payload,
			};
		case 'setmulitple':
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
