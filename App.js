import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import LoginPage from "./src/screens/LoginPage";
import SignUpPage from "./src/screens/SignUpPage";
import HomePage from "./src/screens/HomePage";
import PlayPage from "./src/screens/PlayPage";
import InfoPage from "./src/screens/InfoPage";
import ResultsPage from "./src/screens/ResultsPage";
import UserPage from "./src/screens/UserPage";
import ProgressPage from "./src/screens/ProgressPage";
import ChangePasswordPage from "./src/screens/ChangePasswordPage";
import ManageQuizPage from "./src/screens/ManageQuizPage";
import CreateQuizPage from "./src/screens/CreateQuizPage";
import EditQuizPage from "./src/screens/EditQuizPage";
import AddQuestionPage from "./src/screens/AddQuestionPage";
import ViewAllQuestionsPage from "./src/screens/ViewAllQuestionsPage";
import ManageuserPage from "./src/screens/ManageUserPage";
import ForgotPasswordPage from "./src/screens/ForgotPasswordPage";

// This prevents SplashScreen from auto hiding
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		PoppinsRegular: require("./src/assets/fonts/Poppins/Poppins-Regular.ttf"),
		PoppinsMedium: require("./src/assets/fonts/Poppins/Poppins-Medium.ttf"),
		PoppinsSemiBold: require("./src/assets/fonts/Poppins/Poppins-SemiBold.ttf"),
		PoppinsBold: require("./src/assets/fonts/Poppins/Poppins-Bold.ttf"),
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
				<Stack.Screen name="playpage" component={PlayPage} />
				<Stack.Screen name="infopage" component={InfoPage} />
				<Stack.Screen name="resultspage" component={ResultsPage} />
				<Stack.Screen name="userpage" component={UserPage} />
				<Stack.Screen name="manageuserpage" component={ManageuserPage} />
				<Stack.Screen name="progresspage" component={ProgressPage} />
				<Stack.Screen
					name="changepasswordpage"
					component={ChangePasswordPage}
				/>
				<Stack.Screen name="managequizpage" component={ManageQuizPage} />
				<Stack.Screen name="createquizpage" component={CreateQuizPage} />
				<Stack.Screen name="editquizpage" component={EditQuizPage} />
				<Stack.Screen name="addquestionpage" component={AddQuestionPage} />
				<Stack.Screen name="forgotpasswordpage" component={ForgotPasswordPage} />
				<Stack.Screen
					name="viewallquestionspage"
					component={ViewAllQuestionsPage}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
