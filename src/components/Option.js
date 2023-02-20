import { styles } from '../styles/components/OptionStyle';
import { Text, TouchableOpacity, View } from 'react-native';
import { updateQuiz } from '../utilities/updateQuiz';
import { useNavigation } from '@react-navigation/native';

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
