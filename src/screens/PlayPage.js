import { useEffect, useReducer, useState } from 'react';
import { View, Text, StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/PlayStyle';
import ProgressBar from 'react-native-progress/Bar';
import {
	Option,
	GoBack,
	LoadingAnimation,
	FillInBlank,
	PlayNavigator,
} from '../components/Index';
import { QuizReducer, INITIAL_STATE } from '../utilities/QuizReducer';
import { fetchQuiz } from '../utilities/fetchQuiz';

const PlayPage = ({ route, navigation }) => {
	const { quiz, number } = route.params;
	// Contains all relevant information on the specified quiz, see: ../utilities/QuizReducer
	const [state, dispatch] = useReducer(QuizReducer, INITIAL_STATE);

	// Retrieve all questions from specified quiz then set state with information on first render
	useEffect(() => {
		fetchQuiz(quiz, dispatch).then(() =>
			dispatch({ type: 'setisloading', payload: false })
		);
	}, []);

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
								progress={state.index / (state.quizLength - 1)}
								style={styles.progressbar}
								width={260}
								height={20}
								borderRadius={30}
								color={'#3F51B5'}
							/>
						</View>
						<View>
							{state.category === 'fill_in_blank' ? (
								<FillInBlank state={state} dispatch={dispatch} />
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
										/>
									))}
								</View>
							)}
						</View>
						<PlayNavigator
							state={state}
							dispatch={dispatch}
							quiz={quiz}
							number={number}
							nav={navigation}
						/>
					</SafeAreaView>
					<StatusBar translucent backgroundColor="transparent" />
				</ImageBackground>
			)}
		</View>
	);
};

export default PlayPage;
