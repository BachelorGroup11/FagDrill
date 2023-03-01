import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/ChangePasswordStyle';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../firebaseConfig';
import {
	getAuth,
	updatePassword,
	reauthenticateWithCredential,
} from 'firebase/auth';

const ChangePasswordPage = ({ navigation }) => {
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const changePassword = (newPassword) => {
		const auth = getAuth();
		const user = auth.currentUser;

		updatePassword(user, newPassword)
			.then(() => {
				console.log(`Set new password to: ${newPassword}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Change Password</Text>

			<View style={styles.container}>
				<TouchableOpacity
					style={styles.btnBackToHome}
					onPress={() => navigation.navigate('userpage')}
				>
					<Text style={styles.knapptext}>X</Text>
				</TouchableOpacity>
				<View style={styles.inputViewEmail}>
					<Text>Current Password</Text>
				</View>
				<TextInput
					style={styles.TextInputEmail}
					onChangeText={(text) => setCurrentPassword(text)}
					secureTextEntry
				/>

				<View style={styles.inputViewPassword}>
					<Text>New Password</Text>
				</View>
				<TextInput
					style={styles.TextInputPassword}
					onChangeText={(text) => setNewPassword(text)}
					secureTextEntry
				/>

				<TouchableOpacity
					style={styles.appButtonContainer2}
					onPress={() => changePassword(newPassword)}
				>
					<Text>Change Password</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default ChangePasswordPage;
