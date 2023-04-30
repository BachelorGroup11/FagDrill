import { useState, useEffect } from "react";
import { View, ScrollView, StatusBar, Text, TouchableOpacity, Share } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/ResultsStyle";
import { GoBack, Result, LoadingAnimation } from "../components/Index";
import { fetchResults } from "../utilities/fetchResults";

const ResultsPage = ({ navigation }) => {
	const [resultsArray, setResultsArray] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isShare, setIsShare] = useState([]);

	// Fetch all result documents linked to the specific user from firebase
	useEffect(() => {
		fetchResults(setResultsArray).then(() => setIsLoading(false));
		
	}, []);
	return (
		<View style={styles.containerTo}>
			{isLoading ? (
				<LoadingAnimation />
			) : (
				<SafeAreaView style={styles.containerTo}>
					<ScrollView style={styles.container}>
					<Text style={styles.title}>Results</Text>
					<TouchableOpacity
						style={styles.btnBackToHome}
						onPress={() => navigation.navigate("homepage")}
					>
						<Text style={styles.knapptext}>X</Text>
					</TouchableOpacity>

					<View style={{ marginVertical: 50}}>
						{resultsArray
							.sort((a, b) => b.date - a.date)
							.map((result, idx) => (
								<Result
									name={result.name}
									attempt={result.attempt}
									score={result.score}
									total={result.totalQuestions}
									date={result.date}
									key={idx}
								/>
								
							))}
						</View>
					</ScrollView>
					<StatusBar translucent backgroundColor="transparent" />
				</SafeAreaView>
			)}
		</View>
	);
};

export default ResultsPage;
