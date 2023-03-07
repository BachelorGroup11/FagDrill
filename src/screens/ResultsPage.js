import { SafeAreaView, View, ScrollView, StatusBar, Text } from 'react-native';
import { styles } from '../styles/screens/ResultsStyle';
import { GoBack, Result } from '../components/Index';

const ResultsPage = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.containerTo}>
			<ScrollView style={styles.container}>
				<View>
					<Text style={styles.resultaterText}>Resultater</Text>
					<GoBack nav={navigation} destination={'homepage'} />
				</View>
				<Result />
				<Result />
				<Result />
				<Result />
			</ScrollView>
			<StatusBar translucent backgroundColor="transparent" />
		</SafeAreaView>
	);
};

export default ResultsPage;
