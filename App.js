import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/screens/LoginPage";
import HomePage from "./src/screens/HomePage";
import SignUpPage from "./src/screens/SignUpPage";
import UserPage from "./src/screens/UserPage";
import ProgressPage from "./src/screens/ProgressPage";
import ChangePasswordPage from "./src/screens/ChangePasswordPage";
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import InfoPage from './src/screens/InfoPage';
import UserPage_Admin from './src/screens/UserPage_Admin';
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
		<NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loginpage" component={LoginPage} />
        <Stack.Screen name="signuppage" component={SignUpPage} />
        <Stack.Screen name="homepage" component={HomePage} />
        <Stack.Screen name="infopage" component={InfoPage} />
        <Stack.Screen name="userpage" component={UserPage} />
		<Stack.Screen name="Userpageadmin" component={UserPage_Admin} />
        <Stack.Screen name="progresspage" component={ProgressPage} />
        <Stack.Screen
          name="changepasswordpage"
          component={ChangePasswordPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
	);
}
