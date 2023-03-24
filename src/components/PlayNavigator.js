import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/components/PlayNavigatorStyle';
import { addResult } from '../utilities/addResult';

export const PlayNavigator = ({ state, dispatch, quiz, name, nav }) => {
	const nextQuestion = () => {
		if (state.index < state.questionsArray.length - 1) {
			dispatch({
				type: 'setmulitple',
				payload: {
					selected: -1,
					questionText: state.questionsArray[state.index + 1].question_text,
					options: state.questionsArray[state.index + 1].options,
					category: state.questionsArray[state.index + 1].category,
					correctOption: state.questionsArray[state.index + 1].correct_answer,
					summary: state.questionsArray[state.index + 1].summary,
					index: state.index + 1,
				},
			});
		} else {
			dispatch({
				type: 'setindex',
				payload: state.index + 1,
			});
		}
	};

	const previousQuestion = () => {
		if (state.index < state.questionsArray.length && state.index > 0) {
			dispatch({
				type: 'setmulitple',
				payload: {
					index: state.index - 1,
					selected: -1,
					questionText: state.questionsArray[state.index - 1].question_text,
					options: state.questionsArray[state.index - 1].options,
					category: state.questionsArray[state.index - 1].category,
					correctOption: state.questionsArray[state.index - 1].correct_answer,
					summary: state.questionsArray[state.index - 1].summary,
				},
			});
		}
	};

	const finishQuiz = () => {
		if (state.answeredArray.length < state.questionsArray.length) {
			return Alert.alert(
				'',
				`You have ${
					state.quizLength - state.answeredArray.length
				} unanswered questions.\nAre you sure you wish to complete the quiz?`,
				[
					{ text: 'Cancel' },
					{
						text: 'Confirm',
						onPress: () => addResult(state, quiz, name, nav),
					},
				]
			);
		}
		addResult(state, quiz, name, nav);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.previousBtn} onPress={previousQuestion}>
				<Text style={styles.btnText}>Previous</Text>
			</TouchableOpacity>
			{state.index > 0 && (
				<TouchableOpacity style={styles.index} onPress={previousQuestion}>
					<Text style={styles.indextext}>{state.index}</Text>
				</TouchableOpacity>
			)}
			<TouchableOpacity style={styles.index}>
				<Text style={[styles.indextext, { color: '#00FFE0' }]}>
					{state.index + 1}
				</Text>
			</TouchableOpacity>
			{state.index < state.questionsArray.length - 1 && (
				<TouchableOpacity style={styles.index} onPress={nextQuestion}>
					<Text style={styles.indextext}>{state.index + 2}</Text>
				</TouchableOpacity>
			)}
			{state.index < state.questionsArray.length - 1 ? (
				<TouchableOpacity style={styles.nextBtn} onPress={nextQuestion}>
					<Text style={styles.btnText}>Next</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity style={styles.nextBtn} onPress={finishQuiz}>
					<Text style={styles.btnText}>Finish</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};
