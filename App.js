import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';
import QuizInfo from './src/screens/QuizInfo';
import SignUpPage from './src/screens/SignUpPage';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="loginpage" component={LoginPage} />
				<Stack.Screen name="signuppage" component={SignUpPage} />
				<Stack.Screen name="homepage" component={HomePage} />
				<Stack.Screen name="quizinfo" component={QuizInfo} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
