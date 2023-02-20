import React, { useEffect, useState } from 'react';
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
import { Option } from '../components/Option';

const PlayPage = ({ route, navigation }) => {
	const [questionText, setQuestionText] = useState('');
	const [options, setOptions] = useState([]);
	const [correctOption, setCorrectOption] = useState();
	const [score, setScore] = useState(0);
	const [index, setIndex] = useState(1);
	const [questionsArray, setQuestionsArray] = useState([]);
	const [quizLength, setQuizLength] = useState(0);

	useEffect(() => {
		const { number, quiz } = route.params;
		const q = query(
			collection(db, 'questions'),
			where('quizzes', 'array-contains', quiz)
		);

		const fetchData = async () => {
			const querySnapshot = await getDocs(q);
			setQuestionText(querySnapshot.docs[0].data().question_text);
			setOptions(querySnapshot.docs[0].data().options);
			setCorrectOption(querySnapshot.docs[0].data().correct_answer);
			setQuizLength(querySnapshot.docs.length);
			console.log(typeof querySnapshot.docs.length);

			querySnapshot.forEach((doc) => {
				setQuestionsArray((oldArray) => [...oldArray, doc.data()]);
			});
		};

		fetchData().catch((error) => console.log(error));
	}, []);

	const handleClick = (idx) => {
		if (index < questionsArray.length) {
			setQuestionText(questionsArray[index].question_text);
			setOptions(questionsArray[index].options);
			setCorrectOption(questionsArray[index].correct_answer);
		}

		setIndex((index) => index + 1);

		if (idx === correctOption) {
			setScore((score) => score + 1);
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
				<Text style={styles.IndexText}>Spørsmål {index} av 20</Text>
				<Text style={styles.QuestionText}>{questionText}</Text>
				{options.map((option, idx) => (
					<Option value={option} key={idx} id={idx} handleClick={handleClick} />
				))}
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default PlayPage;
