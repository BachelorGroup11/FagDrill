import { useEffect, useState } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ScrollView,
	ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/HomeStyle';
import { getAuth } from 'firebase/auth';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { GoToQuiz } from '../components/GoToQuiz';

const HomePage = ({ navigation }) => {
	const [quizzes, setQuizzes] = useState([]);

	useEffect(() => {
		setQuizzes([]);
		const auth = getAuth();
		const user = auth.currentUser;

		const fetchQuizzes = async () => {
			const quizQery = query(
				collection(db, 'quizzes'),
				where('users', 'array-contains', user.uid)
			);

			const querySnapshot = await getDocs(quizQery);
			querySnapshot.forEach((doc) => {
				setQuizzes((prevArray) => [
					...prevArray,
					{ id: doc.id, name: doc.data().name },
				]);
			});
		};
		fetchQuizzes().catch((error) => console.log(error));
	}, []);

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
						onPress={() => navigation.navigate('userpage')}
					>
						<ImageBackground
							source={require('../assets/images/Propile_btn_bg.png')}
							style={styles.imgButton}
						></ImageBackground>
					</TouchableOpacity>
					<View style={styles.containerthre}>
						{quizzes
							.sort((a, b) => a.name.localeCompare(b.name))
							.map((value, index) => (
								<GoToQuiz
									nav={navigation}
									name={value.name}
									quiz={value.id}
									key={index}
								/>
							))}
					</View>
					<TouchableOpacity
						style={styles.resultBtn}
						onPress={() => navigation.navigate('resultspage')}
					>
						<Text style={styles.resultTxt}>Results</Text>
					</TouchableOpacity>
				</ScrollView>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default HomePage;
