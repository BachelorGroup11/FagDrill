import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/UserPageAdminStyle';
import { getAuth } from 'firebase/auth';

const UserPage_Admin = ({ navigation }) => {
	const auth = getAuth();
	const user = auth.currentUser;

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

	const goToChangePassword = () => {
		navigation.navigate('changepasswordpage');
	};

	const goToProgress = () => {
		navigation.navigate('progresspage');
	};

	return (
		<ImageBackground
			source={require('../assets/images/Quizinfo_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView style={styles.containerTo}>
				<View>{user && <Text style={styles.letsplay}>{user.email}</Text>}</View>
				<TouchableOpacity
					style={styles.imgBtn_profile}
					onPress={() => goToHome()}
				>
					<Text style={styles.knapptext}>X</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.Userpagebtn}>
					<Text style={styles.Userpagebtntext}>Manage Quizzes</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.Userpagebtn}>
					<Text style={styles.Userpagebtntext}>Manage Users</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.Userpagebtn}
					onPress={() => goToProgress()}
				>
					<Text style={styles.Userpagebtntext}>Progress</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.Userpagebtn}
					onPress={() => goToChangePassword()}
				>
					<Text style={styles.Userpagebtntext}>Change Password</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.Userpagebtn}
					onPress={() => handleSignOut()}
				>
					<Text style={styles.Userpagebtntext}>Sign Out</Text>
				</TouchableOpacity>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default UserPage_Admin;
