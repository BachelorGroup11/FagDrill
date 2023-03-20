import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/components/FillInBlankStyle';

export const FillInBlank = ({ state, dispatch }) => {
	const [answer, setAnswer] = useState('');
	const [wasCorrect, setWasCorrect] = useState(false);

	const sumbitAnswer = () => {
		dispatch({
			type: 'setmulitple',
			payload: {
				index: state.index + 1,
				selected: 55,
				score:
					answer.toLowerCase() === state.correctOption.toLowerCase()
						? state.score + 1
						: state.score,
			},
		});
		answer.toLowerCase() === state.correctOption.toLowerCase() &&
			setWasCorrect(true);
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
			{state.selected != 55 ? (
				<TouchableOpacity onPress={sumbitAnswer} style={styles.sumbitBtn}>
					<Text style={styles.btnText}>Submit</Text>
				</TouchableOpacity>
			) : wasCorrect ? (
				<Text style={styles.feedback}>Correct answer</Text>
			) : (
				<Text style={styles.feedback}>
					Incorrect answer{'\n'}Correct answer was {state.correctOption}
				</Text>
			)}
		</View>
	);
};
