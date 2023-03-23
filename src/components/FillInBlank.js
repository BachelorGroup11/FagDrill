import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/components/FillInBlankStyle';

export const FillInBlank = ({ state, dispatch }) => {
	const [answer, setAnswer] = useState('');
	const [wasAnswered, setWasAnswered] = useState({
		answered: false,
		wasCorrect: false,
	});

	useEffect(() => {
		let has_been_answered = state.answeredArray.find(
			(x) => x.index === state.index
		);

		if (typeof has_been_answered !== 'undefined') {
			setWasAnswered({
				answered: true,
				wasCorrect:
					has_been_answered.answerInput.toLowerCase() ===
					state.correctOption.toLowerCase(),
			});
		}
	}, [state.index]);

	const sumbitAnswer = () => {
		let has_been_answered = state.answeredArray.find(
			(x) => x.index === state.index
		);
		if (typeof has_been_answered !== 'undefined') return;

		dispatch({
			type: 'setansweredarray',
			payload: {
				is_answered: true,
				answerInput: answer,
				correctAnswer: state.correctOption,
				index: state.index,
			},
		});

		dispatch({
			type: 'setmulitple',
			payload: {
				selected: 55,
				score:
					answer.toLowerCase() === state.correctOption.toLowerCase()
						? state.score + 1
						: state.score,
			},
		});
		answer.toLowerCase() === state.correctOption.toLowerCase()
			? setWasAnswered({ answered: true, wasCorrect: true })
			: setWasAnswered({ answered: true, wasCorrect: false });
	};

	return (
		<View style={styles.container} behavior={'position'}>
			<Text style={styles.headerText}>Fill in the blank: </Text>
			<Text style={styles.displayText}>lorem _ dolor</Text>
			<TextInput
				style={styles.input}
				placeholderTextColor={'#00000070'}
				placeholder="Answer here"
				onChangeText={(text) => setAnswer(text)}
				value={answer}
			/>
			{wasAnswered.answered === false ? (
				<TouchableOpacity onPress={sumbitAnswer} style={styles.sumbitBtn}>
					<Text style={styles.btnText}>Submit</Text>
				</TouchableOpacity>
			) : wasAnswered.wasCorrect === true ? (
				<View style={styles.correctcontainer}>
					<Text style={styles.feedback}>Correct answer</Text>
					<Text style={styles.summarytext}>{state.summary}</Text>
				</View>
			) : (
				<View style={styles.correctcontainer}>
					<Text style={styles.feedback}>
						Incorrect answer{'\n'}Correct answer was {state.correctOption}
					</Text>
					<Text style={styles.summarytext}>{state.summary}</Text>
				</View>
			)}
		</View>
	);
};
