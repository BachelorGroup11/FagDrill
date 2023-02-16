import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';
import QuizInfo from './src/screens/QuizInfo';
import SignUpPage from './src/screens/SignUpPage';
import PlayPage from './src/screens/PlayPage';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		PoppinsBold: require('./src/assets/fonts/Poppins-Bold.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer onReady={onLayoutRootView}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="loginpage" component={LoginPage} />
				<Stack.Screen name="signuppage" component={SignUpPage} />
				<Stack.Screen
					name="homepage"
					component={HomePage}
					options={{ gestureEnabled: false }}
				/>
				<Stack.Screen name="quizinfo" component={QuizInfo} />
				<Stack.Screen name="playpage" component={PlayPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
