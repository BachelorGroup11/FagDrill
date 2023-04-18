import { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
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
				<Text>email</Text>
			</View>
			<TextInput
				style={styles.TextInputEmail}
				onChangeText={(text) => setEmail(text)}
			/>

			<View style={styles.inputViewPassword}>
				<Text>password</Text>
			</View>
			<TextInput
				style={styles.TextInputPassword}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry
			/>

			<View style={styles.signupBtn}>
				<Button
					title="Sign Up"
					color="white"
					fontWeight="bold"
					style={styles.signupBtn}
					onPress={handleSignUp}
				/>
			</View>

			<View style={styles.orText}>
				<Text style={styles.orText}>⎯⎯⎯⎯⎯⎯⎯⎯OR⎯⎯⎯⎯⎯⎯⎯⎯</Text>
			</View>

			<View style={styles.loginBtn}>
				<Button
					title="LOGIN"
					color="#2e216f"
					fontWeight="underline"
					style={styles.loginBtn}
					onPress={() => navigation.navigate('loginpage')}
				/>
			</View>
		</SafeAreaView>
	);
};

export default SignUpPage;
