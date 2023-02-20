import { styles } from '../styles/components/GoToQuizStyle';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Component for buttons on homepage redirecting to a specified quiz
export const GoToQuiz = ({ number, quiz }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.knappBytteS}
			onPress={() =>
				navigation.navigate('infopage', {
					number: number,
					quiz: quiz,
				})
			}
		>
			<ImageBackground
				source={require('../assets/images/QuizBtn.png')}
				style={styles.imgButton}
			>
				<Text style={styles.knapptext}>Øving til sert nr{number}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
};
