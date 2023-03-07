import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';
import InfoPage from './src/screens/InfoPage';
import SignUpPage from './src/screens/SignUpPage';
import PlayPage from './src/screens/PlayPage';
import ResultsPage from './src/screens/ResultsPage';

// This prevents SplashScreen from auto hiding
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		PoppinsBold: require('./src/assets/fonts/Poppins/Poppins-Bold.ttf'),
	});

	// After custom fonts have loaded, we can hide the splash screen and display the app screen
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
				<Stack.Screen name="infopage" component={InfoPage} />
				<Stack.Screen name="playpage" component={PlayPage} />
				<Stack.Screen name="resultspage" component={ResultsPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
