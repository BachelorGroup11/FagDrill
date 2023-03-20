import { useEffect, useReducer } from 'react';
import {
	View,
	Text,
	StatusBar,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/PlayStyle';
import { db } from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import ProgressBar from 'react-native-progress/Bar';
import { Option, GoBack, LoadingAnimation } from '../components/Index';
import { QuizReducer, INITIAL_STATE } from '../utilities/QuizReducer';
import { fetchQuiz } from '../utilities/fetchQuiz';

const PlayPage = ({ route, navigation }) => {
	const { quiz } = route.params;
	// Contains all relevant information on the specified quiz, see: ../utilities/QuizReducer
	const [state, dispatch] = useReducer(QuizReducer, INITIAL_STATE);

	// Retrieve all questions from specified quiz then set state with information on first render
	useEffect(() => {
		fetchQuiz(quiz, dispatch).then(() =>
			dispatch({ type: 'setisloading', payload: false })
		);
	}, []);

	// Continue to next question on answer input
	const nextQuestion = () => {
		try {
			dispatch({
				type: 'setmulitple',
				payload: {
					selected: -1,
					questionText: state.questionsArray[state.index].question_text,
					options: state.questionsArray[state.index].options,
					correctOption: state.questionsArray[state.index].correct_answer,
				},
			});
		} catch (error) {
			dispatch({
				type: 'setindex',
				payload: state.index + 1,
			});
		}
	};

	// Create new document in results collection and push result
	const finishQuiz = async () => {
		const auth = getAuth();
		const user = auth.currentUser;

		await addDoc(collection(db, 'results'), {
			name: `Quiz ${route.params.number}`,
			quiz_id: quiz,
			score: state.score,
			total_questions: state.quizLength,
			user_id: user.uid,
			attempt: 1,
			date: Timestamp.now(),
		});
		navigation.navigate('resultspage');
	};

	return (
		<View style={styles.containerTo}>
			{state.isLoading ? (
				<LoadingAnimation />
			) : (
				<ImageBackground
					source={require('../assets/images/play_bg.png')}
					style={{ flex: 1, width: null, alignSelf: 'stretch' }}
				>
					<SafeAreaView>
						<GoBack nav={navigation} destination={'homepage'} />
						<View style={styles.progressContainer}>
							<ProgressBar
								progress={state.index / state.quizLength}
								style={styles.progressbar}
								width={260}
								height={20}
								borderRadius={30}
								color={'#3F51B5'}
							/>
						</View>
						{state.index > state.quizLength ? (
							<View>
								<Text style={styles.QuestionText}>
									Du har fullført quizen. Gå videre for å se resultatene dine.
								</Text>
								<TouchableOpacity
									style={styles.resultsBtn}
									onPress={finishQuiz}
								>
									<Text style={styles.btnText}>Resultater</Text>
								</TouchableOpacity>
							</View>
						) : (
							<View>
								<Text style={styles.QuestionText}>{state.questionText}</Text>
								{state.options.map((option, idx) => (
									<Option
										value={option}
										key={idx}
										id={idx}
										state={state}
										dispatch={dispatch}
										style={
											idx === state.selected
												? idx === state.correctOption
													? {
															borderWidth: 5,
															borderColor: '#00FFE0',
													  }
													: { borderWidth: 5, borderColor: 'red' }
												: idx === state.correctOption &&
												  state.selected != -1 && {
														borderWidth: 5,
														borderColor: '#00FFE0',
												  }
										}
									/>
								))}
								{state.selected != -1 && (
									<TouchableOpacity
										style={styles.nextBtn}
										onPress={nextQuestion}
									>
										<Text style={[styles.btnText, { fontSize: 22 }]}>Next</Text>
									</TouchableOpacity>
								)}
							</View>
						)}
					</SafeAreaView>
					<StatusBar translucent backgroundColor="transparent" />
				</ImageBackground>
			)}
		</View>
	);
};

export default PlayPage;
