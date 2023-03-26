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
				<View>{user && <Text style={styles.title}>{user.email}</Text>}</View>
				<TouchableOpacity
					style={styles.btnBackToHome}
					onPress={() => navigation.navigate('homepage')}
				>
					<Text style={styles.knapptext}>X</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.appButtonContainer1}>
					<Text style={styles.YourAccountText1}>Manage Quizzes</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.appButtonContainer3}>
					<Text style={styles.YourAccountText1}>Manage Users</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.appButtonContainer4}
					onPress={() => navigation.navigate('progresspage')}
				>
					<Text style={styles.YourAccountText1}>Progress</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.appButtonContainer5}
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
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default UserPage_Admin;
