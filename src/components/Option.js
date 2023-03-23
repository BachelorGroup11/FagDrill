import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/components/OptionStyle';

// Component responsible for rendering buttons with answer options for a given question
export const Option = ({ value, id, state, dispatch }) => {
	const [answeredStyle, setAnsweredStyle] = useState();

	// Update colour and border around on press to show wheter answer was correct or incorrect
	useEffect(() => {
		setAnsweredStyle([]);
		let has_been_answered = state.answeredArray.find(
			(x) => x.index === state.index
		);

		if (typeof has_been_answered !== 'undefined') {
			has_been_answered.answerInput === has_been_answered.correctAnswer &&
			has_been_answered.answerInput === id
				? setAnsweredStyle({
						borderWidth: 5,
						borderColor: '#00FFE0',
				  })
				: has_been_answered.correctAnswer === id
				? setAnsweredStyle({ borderWidth: 5, borderColor: '#00FFE0' })
				: has_been_answered.answerInput === id &&
				  setAnsweredStyle({
						borderWidth: 5,
						borderColor: 'red',
				  });
		}
	}, [state.index, state.selected]);

	// Update score on button press
	const updateQuiz = () => {
		let has_been_answered = state.answeredArray.find(
			(x) => x.index === state.index
		);
		if (typeof has_been_answered !== 'undefined') return;

		dispatch({
			type: 'setansweredarray',
			payload: {
				is_answered: true,
				answerInput: id,
				correctAnswer: state.correctOption,
				index: state.index,
			},
		});

		dispatch({
			type: 'setmulitple',
			payload: {
				selected: id,
				score: id == state.correctOption ? state.score + 1 : state.score,
			},
		});
	};

	return (
		<View>
			<TouchableOpacity
				style={[styles.btnChoice, answeredStyle]}
				onPress={() => state.selected === -1 && updateQuiz()}
			>
				<Text style={styles.btnText}>{value}</Text>
			</TouchableOpacity>
		</View>
	);
};
