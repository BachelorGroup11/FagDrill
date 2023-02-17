import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/PlayStyle';

const PlayPage = ({ navigation }) => {
	return (
		<ImageBackground
			source={require('../assets/images/play_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView style={styles.containerTo}>
				<View>
					<TouchableOpacity
						onPress={() => console.log('test')}
						style={styles.btnBackToHome}
					>
						<Text style={styles.knapptext}>X</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.textWrapper}>
					<Text style={styles.levelText}>Spørsmål 5 av 20</Text>
					<Text style={styles.Infotext}>
						Hvilket av disse alternativene er korrekt?
					</Text>
				</View>
				<TouchableOpacity
					style={styles.startBtn}
					onPress={() => navigation.navigate('homepage')}
				>
					<Text style={styles.btnText}>SVAR 1</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.startBtn, { margin: 70 }]}
					onPress={() => navigation.navigate('homepage')}
				>
					<Text style={styles.btnText}>SVAR 2</Text>
				</TouchableOpacity>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default PlayPage;
