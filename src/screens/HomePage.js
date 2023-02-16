import React, { useEffect } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ScrollView,
	ImageBackground,
	Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/HomeStyle';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../firebaseConfig';

const HomePage = ({ navigation }) => {
	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(collection(db, 'quizzes'));
			querySnapshot.forEach((doc) => {
				console.log(doc.id, ' => ', doc.data());
			});
		};

		fetchData().catch((error) => console.log(error));
	}, []);

	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				navigation.replace('loginpage');
			})
			.catch((error) => console.log(error));
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
							onPress={() =>
								navigation.navigate('quizinfo', {
									number: 1,
									quiz: 'dFPZQ3bseEkoPMqlrzz7',
								})
							}
						>
							<ImageBackground
								source={require('../assets/images/QuizBtn.png')}
								style={styles.imgButton}
							>
								<Text style={styles.knapptext}>Øving til sert nr1</Text>
							</ImageBackground>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.knappBytteS}
							onPress={() =>
								navigation.navigate('quizinfo', {
									number: 2,
									quiz: 'ad8usDZM4b5GWrpoV6nb',
								})
							}
						>
							<ImageBackground
								source={require('../assets/images/QuizBtn.png')}
								style={styles.imgButton}
							>
								<Text style={styles.knapptext}>Øving til sert nr2</Text>
							</ImageBackground>
						</TouchableOpacity>
						<View style={styles.loginBtn}>
							<Button
								title={'Sign out'}
								color="white"
								fontWeight="bold"
								style={styles.loginBtn}
								onPress={handleSignOut}
							/>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default HomePage;
