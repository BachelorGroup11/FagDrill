import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/ChangePasswordStyle";
import {
	updatePassword,
	reauthenticateWithCredential,
	EmailAuthProvider,
} from "firebase/auth";

const ChangePasswordPage = ({ navigation }) => {
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");

	const goToUserPages = () => {
		navigation.replace("userpage");
	};

	// Gets Current Pasword and CHanges it into New
	const changePassword = (oldPassword, newPassword) => {
		const credential = EmailAuthProvider.credential(user.email, oldPassword);

		reauthenticateWithCredential(user, credential)
			.then(() => {
				updatePassword(user, newPassword)
					.then(() => {
						goToUserPages();
						//navigation.navigate("userpage"); //Once password change it goes to userpage
					})
					.then(() => {
						alert("Successfully updated password");
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Change{"\n"}Password</Text>

			<View style={styles.container}>
				<TouchableOpacity
					style={styles.btnBackToHome}
					onPress={() => goToUserPages()}
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
					onPress={() => changePassword(currentPassword, newPassword)}
				>
					<Text style={styles.YourAccountText2}>Update</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default ChangePasswordPage;
