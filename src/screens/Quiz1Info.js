import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/Quiz1Style';

const Quiz1Info = ({ navigation }) => {
	const goToHome = () => {
		navigation.navigate('homepage');
	};

	return (
		<ImageBackground
			source={require('../assets/images/Quizinfo_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView style={styles.containerTo}>
				<View>
					<TouchableOpacity
						style={styles.btnBackToHome}
						onPress={() => goToHome()}
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

export default Quiz1Info;
