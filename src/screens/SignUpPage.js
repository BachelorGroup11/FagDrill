import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/SignUpStyle';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const SignUpPage = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				navigation.navigate('homepage');
			}
		});
		return unsubscribe;
	}, []);

	const handleSignUp = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
			})
			.catch((error) => alert(error.message));
	};

	return (
		<SafeAreaView style={styles.container}>
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
