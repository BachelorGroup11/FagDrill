import { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/ForgotPassStyle';
import { onAuthStateChanged, passwordReset, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const ForgotPasswordPage = ({ navigation }) => {
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
    const forgotPassword = (email) => {
        console.log("reset email sent to " + email);
        sendPasswordResetEmail(auth,email,null)
            .then(() => {
                alert("reset email sent to " + email);
                navigation.navigate('loginpage');
            })
            .catch(function (e) {
                console.log(e);
            });
    };

	return (
		<SafeAreaView style={styles.container}>
			<Image
				style={styles.altaLogo}
				source={require("../assets/images/Alta.png")}
			/>
			<Text style={styles.title}>Forgot Password?</Text>

			<View style={styles.inputViewEmail}>
				<Text>Email</Text>
				<TextInput
					style={styles.TextInputEmail}
					onChangeText={(text) => setEmail(text)}
				/>
			</View>
			
			<TouchableOpacity
				style={styles.signupBtn}
				onPress={() => forgotPassword(email)}
			>
				<Text style={styles.signupText}>Send Email</Text>
			</TouchableOpacity>

			<View style={styles.orText}>
				<Text style={styles.orText}>⎯⎯⎯⎯⎯⎯⎯⎯OR⎯⎯⎯⎯⎯⎯⎯⎯</Text>
			</View>

			<TouchableOpacity
				style={styles.loginBtn}
				onPress={() => navigation.navigate('loginpage')}
			>
				<Text style={styles.loginText}>Log In</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default ForgotPasswordPage;
