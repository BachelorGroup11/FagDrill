import { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/LoginStyle';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const LoginPage = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Check whether a user has successfully signed in, if so redirect the user to the Home screen
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				navigation.navigate('homepage');
			}
		});
		// Unsubscribe to avoid memory leaks
		return unsubscribe;
	}, []);

	// Sign in user with email and password using firebase library function
	const handleLogin = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				// Unused variable at this time, might come in handy in the future
				const user = userCredentials.user;
			})
			.catch((error) => alert(error.message));
	};

	return (
		<SafeAreaView style={styles.container}>
			<Image
				style={styles.altaLogo}
				source={require("../assets/images/Alta.png")}
			/>
			<Text style={styles.title}>Log In</Text>

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
				style={styles.loginBtn} 
				onPress={handleLogin}
			>
			<Text style={styles.loginText}>Log In</Text>
			</TouchableOpacity>

			<View style={styles.orText}>
				<Text style={styles.orText}>⎯⎯⎯⎯⎯⎯⎯⎯OR⎯⎯⎯⎯⎯⎯⎯⎯</Text>
			</View>

			<TouchableOpacity
				style={styles.signupBtn}
				onPress={() => navigation.navigate('signuppage')}
			>
				<Text style={styles.signupText}>SIGN UP</Text>
			</TouchableOpacity>
			
			<TouchableOpacity
				style={styles.forgotPass}
				onPress={() => navigation.navigate('forgotpasswordpage')}
			>
				<Text style={styles.forgotText}>Forgot Password?</Text>
			</TouchableOpacity>

		</SafeAreaView>
	);
};

export default LoginPage;
