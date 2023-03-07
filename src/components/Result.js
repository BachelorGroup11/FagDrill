import { styles } from '../styles/components/ResultStyle';
import { Text, TouchableOpacity, View } from 'react-native';

// Result
export const Result = () => {
	return (
		<View>
			<TouchableOpacity style={styles.rectangle}>
				<Text style={styles.quizName}>Øving til sert nr 3</Text>
				<Text style={styles.attemptNum}>Forsøk: 1</Text>
				<Text style={styles.correctNum}>10/25</Text>
			</TouchableOpacity>
		</View>
	);
};
