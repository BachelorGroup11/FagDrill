import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/UserStyle';
import { auth } from '../../firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

const UserPage = ({ navigation }) => {
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
	</ImageBackground>
	);
};

export default UserPage;
