import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';
import Quiz1Info from './src/screens/Quiz1Info';
import SignUpPage from './src/screens/SignUpPage';
import UserPage_Admin from './src/screens/UserPage_Admin';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="loginpage" component={LoginPage} />
				<Stack.Screen name="signuppage" component={SignUpPage} />
				<Stack.Screen name="homepage" component={HomePage} />
				<Stack.Screen name="quiz1info" component={Quiz1Info} />
				<Stack.Screen name="Userpageadmin" component={UserPage_Admin} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
