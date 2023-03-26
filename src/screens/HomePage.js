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
import { collection, query, getDocs, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { GoToQuiz } from '../components/GoToQuiz';

const HomePage = ({ navigation }) => {
	const [quizzes, setQuizzes] = useState([]);

	const [isToggle, setIsToggle] = useState(false);
	const auth = getAuth();
	const user = auth.currentUser;
	
	
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
		
		// Finds ut if the current user is an admin, and set isToggle to tru if the user is admin.
		const fetchData = async () => {
			const userQuery = query(
				collection(db, 'users'),
				where('user_id', '==', user.uid)
			);

			const querySnapshot = await getDocs(userQuery);
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
				if (doc.data().is_admin == true) {
					setIsToggle(!isToggle)
					console.log(isToggle)
				}else{
					setIsToggle(isToggle)
					console.log(isToggle)
				}
			});
		};
		fetchData().catch((error) => console.log(error));
	}, []);

	const userPages = () => {
		console.log(isToggle)
		//checkes if user is admin. using isToggle that we set earlier. And choses userpage or useradminPage
		if (isToggle === true){
			navigation.replace('Userpageadmin');
		}else if (isToggle === false) {
			navigation.replace('userpage');
		}
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
						onPress={() => userPages()}
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
				</ScrollView>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default HomePage;
