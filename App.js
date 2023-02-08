import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screens/HomePage';
import Quiz1Info from './src/screens/Quiz1Info';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="homepage" component={HomePage} />
				<Stack.Screen name="quiz1info" component={Quiz1Info} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
