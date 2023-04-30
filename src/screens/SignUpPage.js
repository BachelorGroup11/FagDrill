import { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/SignUpStyle';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	sendEmailVerification,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../../firebaseConfig';

const SignUpPage = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Check whether a user has successfully signed up, then redirect the user to the Home screen
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				navigation.navigate('homepage');
			}
		});
		// Unsubscribe to avoid memory leaks
		return unsubscribe;
	}, []);

	// Register a new user then create a new document in firestore containing the relevant user information
	const handleSignUp = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				addDoc(collection(db, 'users'), {
					email: userCredentials.user.email,
					is_admin: false,
					user_id: userCredentials.user.uid,
				}).catch((error) =>
					console.log(`Error while adding user to firestore: ${error}`)
				);
				if (userCredentials != null){
					sendEmailVerification(userCredentials.user);
					alert('Verification email sendt.')
				  }
			})
			.catch((error) => alert(error.message));
	};

	return (
		<SafeAreaView style={styles.container}>
			<Image
				style={styles.altaLogo}
				source={require("../assets/images/Alta.png")}
			/>
			<Text style={styles.title}>Sign Up</Text>

			<View style={styles.inputViewEmail}>
				<Text style={styles.emailtxt}>Email</Text>
				<TextInput
					style={styles.TextInputEmail}
					onChangeText={(text) => setEmail(text)}
				/>
			</View>

			<View style={styles.inputViewPassword}>
				<Text style={styles.passwordtxt}>Password</Text>
				<TextInput
					style={styles.TextInputPassword}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry
				/>
			</View>

			
			<TouchableOpacity
				style={styles.signupBtn}
				onPress={handleSignUp}
			>
				<Text style={styles.signupText}>SIGN UP</Text>
			</TouchableOpacity>
	

			<View style={styles.orText}>
				<Text style={styles.orText}>⎯⎯⎯⎯⎯⎯⎯⎯OR⎯⎯⎯⎯⎯⎯⎯⎯</Text>
			</View>

			<TouchableOpacity
				style={styles.loginBtn}
				onPress={() => navigation.navigate('loginpage')}
			>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
		
		</SafeAreaView>
	);
};

export default SignUpPage;
