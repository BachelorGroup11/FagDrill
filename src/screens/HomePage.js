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
import { styles } from '../styles/screens/HomeStyle';
import { auth } from '../../firebaseConfig';
import { GoToQuiz } from '../components/GoToQuiz';

const HomePage = ({ navigation }) => {
	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				navigation.replace('loginpage');
			})
			.catch((error) => console.log(error));
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
						onPress={() => alert('Kommer når vi har fått fikset profil siden')}
					>
						<ImageBackground
							source={require('../assets/images/Propile_btn_bg.png')}
							style={styles.imgButton}
						></ImageBackground>
					</TouchableOpacity>

					<View style={styles.containerthre}>
						<GoToQuiz number={1} quiz={'dFPZQ3bseEkoPMqlrzz7'} />
						<GoToQuiz number={2} quiz={'ad8usDZM4b5GWrpoV6nb'} />
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
