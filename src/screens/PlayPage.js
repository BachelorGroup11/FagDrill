import React from 'react';
import {
	Text,
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
			<SafeAreaView>
				<TouchableOpacity
					style={styles.btnBack}
					onPress={() => navigation.navigate('homepage')}
				>
					<Text style={styles.knapptext}>X</Text>
				</TouchableOpacity>
				<Text style={styles.IndexText}>Spørsmål 5 av 20</Text>
				<Text style={styles.QuestionText}>
					Hvilket av disse alternativene er korrekt?
				</Text>
				<TouchableOpacity
					style={styles.btnChoice}
					onPress={() => navigation.navigate('homepage')}
				>
					<Text style={styles.btnText}>SVAR 1</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.btnChoice, { margin: 70 }]}
					onPress={() => navigation.navigate('homepage')}
				>
					<Text style={styles.btnText}>SVAR 2</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.btnChoice, { margin: 140 }]}
					onPress={() => navigation.navigate('homepage')}
				>
					<Text style={styles.btnText}>SVAR 3</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.btnChoice, { margin: 210 }]}
					onPress={() => navigation.navigate('homepage')}
				>
					<Text style={styles.btnText}>SVAR 4</Text>
				</TouchableOpacity>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default PlayPage;
