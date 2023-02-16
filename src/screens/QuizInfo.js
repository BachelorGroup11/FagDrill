import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/QuizInfoStyle';

const QuizInfo = ({ navigation }) => {
	return (
		<ImageBackground
			source={require('../assets/images/Quizinfo_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView style={styles.containerTo}>
				<View>
					<TouchableOpacity
						style={styles.btnBackToHome}
						onPress={() => navigation.navigate('homepage')}
					>
						<Text style={styles.knapptext}>X</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.Infotext}>Øving til sert nr 3</Text>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default QuizInfo;
