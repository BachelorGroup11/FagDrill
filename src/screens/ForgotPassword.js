import { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/ForgotPassStyle';
import { onAuthStateChanged, passwordReset, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const ForgotPassword = ({ navigation }) => {
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
			</View>
			<TextInput
				style={styles.TextInputEmail}
				onChangeText={(text) => setEmail(text)}
			/>

			

			<View style={styles.loginBtn}>
				<Button
					title="Send Email"
					color="white"
					fontWeight="bold"
					style={styles.loginBtn}
					onPress={() => forgotPassword(email)}
				/>
			</View>

			<View style={styles.orText}>
				<Text style={styles.orText}>⎯⎯⎯⎯⎯⎯⎯⎯OR⎯⎯⎯⎯⎯⎯⎯⎯</Text>
			</View>

			<View style={styles.signupBtn}>
				<Button
					title="Log In"
					color="#2e216f"
					fontWeight="underline"
					style={styles.loginBtn}
					onPress={() => navigation.navigate('loginpage')}
				/>
			</View>
		</SafeAreaView>
	);
};

export default ForgotPassword;
