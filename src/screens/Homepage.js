import React, { useEffect } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ScrollView,
	ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../styles/HomeStyle';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const HomePage = () => {
	useEffect(() => {
		const fetchData = async () => {
			const ref = doc(db, 'TestCollection', 'TestId');
			const docSnap = await getDoc(ref);
			docSnap.exists()
				? console.log(docSnap.data())
				: console.log('No such document');
		};

		fetchData().catch(console.error);
	}, []);

	const navigation = useNavigation();

	const goToFirst = () => {
		navigation.navigate('quiz1info');
	};

	const Alert = () => {
		alert('Kommer når vi har fått fikset profil siden');
	};

	return (
		<ImageBackground
			source={require('../assets/images/home_page_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView style={styles.containerTo}>
				<View>
					<Text style={styles.letsplay}>Let's play</Text>
				</View>

				<ScrollView style={styles.container}>
					<TouchableOpacity
						style={styles.imgBtn_profile}
						onPress={() => Alert()}
					>
						<ImageBackground
							source={require('../assets/images/Propile_btn_bg.png')}
							style={styles.imgButton}
						></ImageBackground>
					</TouchableOpacity>

					<View style={styles.containerthre}>
						<TouchableOpacity
							style={styles.knappBytteS}
							onPress={() => goToFirst()}
						>
							<ImageBackground
								source={require('../assets/images/QuizBtn.png')}
								style={styles.imgButton}
							>
								<Text style={styles.knapptext}>Øving til sert nr3</Text>
							</ImageBackground>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.knappBytteS}
							onPress={() => goToFirst()}
						>
							<ImageBackground
								source={require('../assets/images/QuizBtn.png')}
								style={styles.imgButton}
							>
								<Text style={styles.knapptext}>Øving til sert nr3</Text>
							</ImageBackground>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.knappBytteS}
							onPress={() => goToFirst()}
						>
							<ImageBackground
								source={require('../assets/images/QuizBtn.png')}
								style={styles.imgButton}
							>
								<Text style={styles.knapptext}>Øving til sert nr3</Text>
							</ImageBackground>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.knappBytteS}
							onPress={() => goToFirst()}
						>
							<ImageBackground
								source={require('../assets/images/QuizBtn.png')}
								style={styles.imgButton}
							>
								<Text style={styles.knapptext}>Øving til sert nr3</Text>
							</ImageBackground>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.knappBytteS}
							onPress={() => goToFirst()}
						>
							<ImageBackground
								source={require('../assets/images/QuizBtn.png')}
								style={styles.imgButton}
							>
								<Text style={styles.knapptext}>Øving til sert nr3</Text>
							</ImageBackground>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.knappBytteS}
							onPress={() => goToFirst()}
						>
							<ImageBackground
								source={require('../assets/images/QuizBtn.png')}
								style={styles.imgButton}
							>
								<Text style={styles.knapptext}>Øving til sert nr3</Text>
							</ImageBackground>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default HomePage;
