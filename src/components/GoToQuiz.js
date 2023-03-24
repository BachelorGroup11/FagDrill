import { styles } from '../styles/components/GoToQuizStyle';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';

// Component for buttons on homepage redirecting to a specified quiz
export const GoToQuiz = ({ nav, name, quiz }) => {
	return (
		<TouchableOpacity
			style={styles.knappBytteS}
			onPress={() =>
				nav.navigate('infopage', {
					name: name,
					quiz: quiz,
				})
			}
		>
			<ImageBackground
				source={require('../assets/images/QuizBtn.png')}
				style={styles.imgButton}
			>
				<Text style={styles.knapptext}>Øving til {name}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
};
