import { styles } from '../styles/components/ResultStyle';
import { Text, TouchableOpacity, View } from 'react-native';

// Render a specific result
export const Result = ({ name, attempt, score, total, date }) => {
	return (
		<View>
			<TouchableOpacity style={styles.rectangle}>
				<Text style={styles.quizName}>{name}</Text>
				<Text style={styles.attemptNum}>Forsøk: {attempt}</Text>
				<Text style={styles.correctNum}>
					{score}/{total}
				</Text>
				<Text style={styles.date}>{date.toDateString()}</Text>
			</TouchableOpacity>
		</View>
	);
};
