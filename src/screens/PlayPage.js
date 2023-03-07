import { useEffect, useReducer, useState } from 'react';
import {
	View,
	Text,
	StatusBar,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/PlayStyle';
import { Option, GoBack, LoadingAnimation } from '../components/Index';
import { QuizReducer, INITIAL_STATE } from '../utilities/QuizReducer';
import { fetchQuiz } from '../utilities/fetchQuiz';

const PlayPage = ({ route, navigation }) => {
	// Contains all relevant information on the specified quiz, see: ../utilities/QuizReducer
	const [state, dispatch] = useReducer(QuizReducer, INITIAL_STATE);
	//const [isLoading, setIsLoading] = useState(true);

	// Retrieve all questions from specified quiz then set state with information on first render
	useEffect(() => {
		const { quiz } = route.params;
		fetchQuiz(quiz, dispatch).then(() =>
			dispatch({ type: 'setisloading', payload: false })
		);
	}, []);

	// Continue to next question on answer input
	useEffect(() => {
		try {
			dispatch({
				type: 'setmulitple',
				payload: {
					questionText: state.questionsArray[state.index].question_text,
					options: state.questionsArray[state.index].options,
					correctOption: state.questionsArray[state.index].correct_answer,
				},
			});
		} catch (error) {
			console.log(error);
		}
	}, [state.index]);

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
						{state.index < state.quizLength && (
							<Text style={styles.IndexText}>
								Spørsmål {state.index + 1} av {state.quizLength}
							</Text>
						)}
						{state.index < state.quizLength ? (
							<View>
								<Text style={styles.QuestionText}>{state.questionText}</Text>
								{state.options.map((option, idx) => (
									<Option
										value={option}
										key={idx}
										id={idx}
										state={state}
										dispatch={dispatch}
									/>
								))}
							</View>
						) : (
							<View>
								<Text style={styles.QuestionText}>
									Du har fullførten quizen. Gå videre for å se resultatene dine.
								</Text>
								<TouchableOpacity
									style={styles.resultsBtn}
									onPress={() => navigation.navigate('resultspage')}
								>
									<Text style={styles.btnText}>Resultater</Text>
								</TouchableOpacity>
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
