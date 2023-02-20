import { useEffect, useReducer } from 'react';
import { Text, StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/PlayStyle';
import { db } from '../../firebaseConfig';
import { query, getDocs, collection, where } from 'firebase/firestore';
import { QuizReducer, INITIAL_STATE } from '../utilities/QuizReducer';
import { Option, GoBack } from '../components/Index';

const PlayPage = ({ route }) => {
	// Contains all relevant information on the specified quiz, see: ../utilities/QuizReducer
	const [state, dispatch] = useReducer(QuizReducer, INITIAL_STATE);

	// Retrieve all questions related to the specified quiz then update state with information
	useEffect(() => {
		// Retrieve specified quiz as parameter from route
		const { number, quiz } = route.params;
		// Query all documents in questions collection containing a link to the specified quiz
		const q = query(
			collection(db, 'questions'),
			where('quizzes', 'array-contains', quiz)
		);

		const fetchData = async () => {
			const querySnapshot = await getDocs(q);
			// Append each question retrieved from database to state
			querySnapshot.forEach((doc) => {
				dispatch({ type: 'setquestionsarray', payload: doc.data() });
			});

			// Update remaining state information responsible for rendering text and handling logic
			dispatch({
				type: 'setmulitple',
				payload: {
					quizLength: querySnapshot.docs.length,
					questionText: querySnapshot.docs[0].data().question_text,
					options: querySnapshot.docs[0].data().options,
					correctOption: querySnapshot.docs[0].data().correct_answer,
				},
			});
		};

		fetchData().catch((error) => console.log(error));
	}, []);

	return (
		<ImageBackground
			source={require('../assets/images/play_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView>
				<GoBack destination={'homepage'} />
				<Text style={styles.IndexText}>
					Spørsmål {state.index} av {state.quizLength}
				</Text>
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
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default PlayPage;
