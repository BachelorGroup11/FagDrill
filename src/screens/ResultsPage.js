import { SafeAreaView, View, Text } from 'react-native';
import { styles } from '../styles/screens/ResultsStyle';
import { GoBack } from '../components/GoBack';

const ResultsPage = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View style={styles.headerContainer}>
				<Text style={styles.resultaterText}>Resultater</Text>
				<GoBack nav={navigation} destination={'homepage'} />
			</View>
		</SafeAreaView>
	);
};

export default ResultsPage;
