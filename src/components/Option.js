import { styles } from '../styles/components/OptionStyle';
import { Text, TouchableOpacity, View } from 'react-native';
import { updateQuiz } from '../utilities/updateQuiz';
import { useNavigation } from '@react-navigation/native';

// Component responsible for rendering buttons with answer options for a given question
export const Option = ({ value, id, state, dispatch }) => {
	const navigation = useNavigation();

	return (
		<View>
			<TouchableOpacity
				style={styles.btnChoice}
				onPress={() => updateQuiz(navigation, id, state, dispatch)}
			>
				<Text style={styles.btnText}>{value}</Text>
			</TouchableOpacity>
		</View>
	);
};
