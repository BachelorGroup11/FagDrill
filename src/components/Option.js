import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/components/OptionStyle';

// Component responsible for rendering buttons with answer options for a given question
export const Option = ({ value, id, state, dispatch, style }) => {
	const updateQuiz = () => {
		dispatch({
			type: 'setmulitple',
			payload: {
				selected: id,
				index: state.index + 1,
				score: id == state.correctOption ? state.score + 1 : state.score,
			},
		});
	};

	return (
		<View>
			<TouchableOpacity
				style={[styles.btnChoice, style]}
				onPress={() => state.selected === -1 && updateQuiz()}
			>
				<Text style={styles.btnText}>{value}</Text>
			</TouchableOpacity>
		</View>
	);
};
