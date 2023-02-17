import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/screens/LoginPage";
import HomePage from "./src/screens/HomePage";
import Quiz1Info from "./src/screens/Quiz1Info";
import SignUpPage from "./src/screens/SignUpPage";
import UserPage from "./src/screens/UserPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loginpage" component={LoginPage} />
        <Stack.Screen name="signuppage" component={SignUpPage} />
        <Stack.Screen name="homepage" component={HomePage} />
        <Stack.Screen name="quiz1info" component={Quiz1Info} />
        <Stack.Screen name="userpage" component={UserPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
