import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/components/OptionStyle';
import { updateQuiz } from '../utilities/updateQuiz';

// Component responsible for rendering buttons with answer options for a given question
export const Option = ({ value, id, state, dispatch, style }) => {
	return (
		<View>
			<TouchableOpacity
				style={[styles.btnChoice, style]}
				onPress={() => state.selected === -1 && updateQuiz(id, state, dispatch)}
			>
				<Text style={styles.btnText}>{value}</Text>
			</TouchableOpacity>
		</View>
	);
};
