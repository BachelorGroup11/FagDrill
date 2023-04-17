import { useEffect, useReducer, useState } from 'react';
import {
	View,
	Text,
	StatusBar,
	ImageBackground,
	Alert,
	Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/PlayStyle';
import ProgressBar from 'react-native-progress/Bar';
import {
	Option,
	GoBack,
	LoadingAnimation,
	FillInBlank,
	ImageQuestion,
	PlayNavigator,
} from '../components/Index';
import { QuizReducer, INITIAL_STATE } from '../utilities/QuizReducer';
import { fetchQuiz } from '../utilities/fetchQuiz';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { addResult } from '../utilities/addResult';

const PlayPage = ({ route, navigation }) => {
	const { quiz, name, duration } = route.params;
	const [state, dispatch] = useReducer(QuizReducer, INITIAL_STATE);

	let has_been_answered = state.answeredArray.find(
		(x) => x.index === state.index
	);

	// Retrieve all questions from specified quiz then update state
	useEffect(() => {
		fetchQuiz(quiz, dispatch).then(() =>
			dispatch({ type: 'setisloading', payload: false })
		);
	}, []);

	const durationExpired = () => {
		return Alert.alert('', `Duration has expired. Continue to finish Quiz.`, [
			{
				text: 'Continue',
				onPress: () => addResult(state, quiz, name, navigation),
			},
		]);
	};

	const formatTime = (remainingTime) => {
		const minutes = `0${Math.floor(remainingTime / 60)}`.slice(-2);
		const seconds = `0${remainingTime % 60}`.slice(-2);
		return `${minutes}:${seconds}`;
	};

	const hoursAndMinutesToSeconds = (hours, minutes) => {
		let hoursToSeconds = hours * 3600;
		let minutesToSeconds = minutes * 60;
		return hoursToSeconds + minutesToSeconds;
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
						<GoBack style={{ top: -50 }} />
						<View style={styles.progressContainer}>
							<ProgressBar
								progress={state.index / (state.quizLength - 1)}
								width={260}
								height={20}
								borderRadius={30}
								color={'#3F51B5'}
							/>
							{hoursAndMinutesToSeconds(duration.hours, duration.minutes) >
								0 && (
								<CountdownCircleTimer
									isPlaying
									duration={hoursAndMinutesToSeconds(
										duration.hours,
										duration.minutes
									)}
									size={38}
									strokeWidth={1.2}
									colors={['#004777', '#F7B801', '#A30000', '#A30000']}
									colorsTime={[7, 5, 2, 0]}
									onComplete={durationExpired}
								>
									{({ remainingTime }) => (
										<Text style={{ fontSize: 10 }}>
											{formatTime(remainingTime)}
										</Text>
									)}
								</CountdownCircleTimer>
							)}
						</View>
						<View>
							{state.category === 'fill_in_blank' ? (
								<FillInBlank state={state} dispatch={dispatch} />
							) : state.category === 'Image question' ? (
								<ImageQuestion state={state} dispatch={dispatch} />
							) : (
								<View>
									<View style={styles.QuestionContainer}>
										<Text style={styles.QuestionText}>
											{state.questionText}
										</Text>
									</View>
									{state.options.map((option, idx) => (
										<Option
											value={option}
											key={idx}
											id={idx}
											state={state}
											dispatch={dispatch}
										/>
									))}
									{typeof has_been_answered !== 'undefined' && (
										<Text style={styles.summarytext}>{state.summary}</Text>
									)}
								</View>
							)}
						</View>
						<PlayNavigator
							state={state}
							dispatch={dispatch}
							quiz={quiz}
							name={name}
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
