import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/components/PlayNavigatorStyle';
import { db } from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

export const PlayNavigator = ({
	state,
	dispatch,
	answeredArray,
	quiz,
	number,
	nav,
}) => {
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
				},
			});
		}
	};

	// Create new document in results collection and push result
	const addResult = async () => {
		const auth = getAuth();
		const user = auth.currentUser;

		await addDoc(collection(db, 'results'), {
			name: `Quiz ${number}`,
			quiz_id: quiz,
			score: state.score,
			total_questions: state.quizLength,
			user_id: user.uid,
			attempt: 1,
			date: Timestamp.now(),
		});
		nav.navigate('resultspage');
	};

	const finishQuiz = () => {
		if (answeredArray.length < state.questionsArray.length) {
			return Alert.alert(
				'',
				`You have ${
					state.quizLength - answeredArray.length
				} unanswered questions.\nAre you sure you wish to complete the quiz?`,
				[{ text: 'Cancel' }, { text: 'Confirm', onPress: addResult }]
			);
		}
		addResult();
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.previousBtn} onPress={previousQuestion}>
				<Text style={styles.btnText}>Previous</Text>
			</TouchableOpacity>
			{state.index > 0 && (
				<TouchableOpacity style={styles.index}>
					<Text style={styles.indextext}>{state.index}</Text>
				</TouchableOpacity>
			)}
			<TouchableOpacity style={styles.index}>
				<Text style={[styles.indextext, { color: '#00FFE0' }]}>
					{state.index + 1}
				</Text>
			</TouchableOpacity>
			{state.index < state.questionsArray.length - 1 && (
				<TouchableOpacity style={styles.index}>
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
