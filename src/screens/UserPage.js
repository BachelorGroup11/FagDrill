import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/UserStyle';
import { auth } from '../../firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { LoadingAnimation, AdminPage } from '../components/Index';

const UserPage = ({ navigation }) => {
	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				navigation.replace('loginpage');
			})
			.catch((error) => console.log(error));
	};

	const [isToggle, setIsToggle] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const auth = getAuth();
	const user = auth.currentUser;
	// Finds ut if the current user is an admin, and set isToggle to tru if the user is admin.
	useEffect(() => {
		const fetchData = async () => {
			const userQuery = query(
				collection(db, 'users'),
				where('user_id', '==', user.uid)
			);

			const querySnapshot = await getDocs(userQuery);
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
				if (doc.data().is_admin == true) {
					setIsToggle(!isToggle);
					setIsLoaded(!isLoaded);
				} else {
					setIsLoaded(!isLoaded);
					setIsToggle(isToggle);
				}
			});
		};
		fetchData().catch((error) => console.log(error));
	}, []);

	return (
		<ImageBackground
			source={require('../assets/images/Quizinfo_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			{!isLoaded ? (
				<LoadingAnimation />
			) : isToggle ? (
				<SafeAreaView style={styles.container}>
					<View>{user && <Text style={styles.title}>{user.email}</Text>}</View>
					<TouchableOpacity
						style={styles.btnBackToHome}
						onPress={() => navigation.navigate('homepage')}
					>
						<Text style={styles.knapptext}>X</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.appButtonContainer1}
						onPress={() => navigation.navigate('createquizpage')}
					>
						<Text style={styles.YourAccountText1}>Manage Quizzes</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.appButtonContainer3}>
						<Text style={styles.YourAccountText1}>Manage Users</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.appButtonContainer4}
						onPress={() => navigation.navigate('progresspage')}
					>
						<Text style={styles.YourAccountText1}>Progress</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.appButtonContainer5}
						onPress={() => navigation.navigate('changepasswordpage')}
					>
						<Text style={styles.YourAccountText1}>Change Password</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.appButtonContainer2}
						onPress={() => handleSignOut()}
					>
						<Text style={styles.YourAccountText2}>Sign Out</Text>
					</TouchableOpacity>
				</SafeAreaView>
			) : (
				<SafeAreaView style={styles.container}>
					<Text style={styles.title}>Your Account</Text>

					<View style={styles.container}>
						<TouchableOpacity
							style={styles.btnBackToHome}
							onPress={() => navigation.navigate('homepage')}
						>
							<Text style={styles.knapptext}>X</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.appButtonContainer1}
							onPress={() => navigation.navigate('progresspage')}
						>
							<Text style={styles.YourAccountText1}>Progress</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.appButtonContainer3}
							onPress={() => navigation.navigate('changepasswordpage')}
						>
							<Text style={styles.YourAccountText1}>Change Password</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.appButtonContainer2}
							onPress={() => handleSignOut()}
						>
							<Text style={styles.YourAccountText2}>Sign Out</Text>
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			)}
		</ImageBackground>
	);
};

export default UserPage;
