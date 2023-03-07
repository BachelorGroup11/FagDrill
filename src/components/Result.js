import { styles } from '../styles/components/ResultStyle';
import { Text, TouchableOpacity, View } from 'react-native';

// Result
export const Result = ({ name, attempt, score, total }) => {
	return (
		<View>
			<TouchableOpacity style={styles.rectangle}>
				<Text style={styles.quizName}>{name}</Text>
				<Text style={styles.attemptNum}>Forsøk: {attempt}</Text>
				<Text style={styles.correctNum}>
					{score}/{total}
				</Text>
			</TouchableOpacity>
		</View>
	);
};
