import React, { useContext } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/UserPageAdminStyle';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const UserPage_Admin = ({ navigation }) => {
	// temp variabler, sikkert ikke beste metode å plassere de her
	const auth = getAuth();
	const user = auth.currentUser;

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
					alert('is admin')
				}else{
					alert('not admin')
				}
			});
		};
		fetchData().catch((error) => console.log(error));
	}, []);

	const goToHome = () => {
		navigation.navigate('homepage');
	};

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
			source={require('../assets/images/Quizinfo_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView style={styles.containerTo}>
				<View>
					{user && <Text style={styles.letsplay}>{user.email}</Text>}
				</View>
				<TouchableOpacity
					style={styles.imgBtn_profile}
					onPress={() => goToHome()}
				>
					<Text style={styles.knapptext}>X</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.Userpagebtn}>
					<Text style={styles.Userpagebtntext}>Administrer quizer</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.Userpagebtn}>
					<Text style={styles.Userpagebtntext}>Administrer Brukere</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.Userpagebtn}>
					<Text style={styles.Userpagebtntext}>Quiz resulteter</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.Userpagebtn}
					onPress={() => handleSignOut()}
				>
					<Text style={styles.Userpagebtntext}>Logg ut</Text>
				</TouchableOpacity>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default UserPage_Admin;
