import React, { useEffect, useReducer } from 'react';
import {
	Text,
	TouchableOpacity,
	StatusBar,
	ImageBackground,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/PlayStyle';
import { db } from '../../firebaseConfig';
import { query, getDocs, collection, where } from 'firebase/firestore';
import { QuizReducer, INITIAL_STATE } from '../utilities/QuizReducer';
import { Option } from '../components/Option';

const PlayPage = ({ route, navigation }) => {
	const [state, dispatch] = useReducer(QuizReducer, INITIAL_STATE);

	useEffect(() => {
		const { number, quiz } = route.params;
		const q = query(
			collection(db, 'questions'),
			where('quizzes', 'array-contains', quiz)
		);

		const fetchData = async () => {
			const querySnapshot = await getDocs(q);

			dispatch({
				type: 'setmulitple',
				payload: {
					quizLength: querySnapshot.docs.length,
					questionText: querySnapshot.docs[0].data().question_text,
					options: querySnapshot.docs[0].data().options,
					correctOption: querySnapshot.docs[0].data().correct_answer,
				},
			});

			querySnapshot.forEach((doc) => {
				dispatch({ type: 'setquestionsarray', payload: doc.data() });
			});
		};

		fetchData().catch((error) => console.log(error));
	}, []);

	const handleClick = (answerIdx) => {
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

	return (
		<ImageBackground
			source={require('../assets/images/play_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView>
				<View style={{ zIndex: 1 }}>
					<TouchableOpacity
						style={styles.btnBack}
						onPress={() => navigation.navigate('homepage')}
					>
						<Text style={styles.knapptext}>X</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.IndexText}>
					Spørsmål {state.index} av {state.quizLength}
				</Text>
				<Text style={styles.QuestionText}>{state.questionText}</Text>
				{state.options.map((option, idx) => (
					<Option value={option} key={idx} id={idx} handleClick={handleClick} />
				))}
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default PlayPage;
