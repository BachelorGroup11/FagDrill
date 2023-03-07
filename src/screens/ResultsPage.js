import { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/ResultsStyle';
import { GoBack, Result, LoadingAnimation } from '../components/Index';
import { db } from '../../firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ResultsPage = ({ navigation }) => {
	// Store the user's results in an array of objects
	const [resultsArray, setResultsArray] = useState([]);

	useEffect(() => {
		const auth = getAuth();
		const user = auth.currentUser;

		// Fetch the user's results from firebase
		const fetchData = async () => {
			const resultsQuery = query(
				collection(db, 'results'),
				where('user_id', '==', user.uid)
			);

			const querySnapshot = await getDocs(resultsQuery);
			querySnapshot.forEach((doc) => {
				setResultsArray((resultsArray) => [
					...resultsArray,
					{
						name: doc.data().name,
						attempt: doc.data().attempt,
						score: doc.data().score,
						totalQuestions: doc.data().total_questions,
						date: doc.data().date.toDate(),
					},
				]);
			});
		};

		fetchData().catch((error) => console.log(error));
	}, []);

	return (
		<View style={styles.containerTo}>
			{resultsArray.length === 0 ? (
				<LoadingAnimation />
			) : (
				<SafeAreaView style={styles.containerTo}>
					<ScrollView style={styles.container}>
						<View>
							<Text style={styles.resultaterText}>Resultater</Text>
							<GoBack nav={navigation} destination={'homepage'} />
						</View>
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
					</ScrollView>
					<StatusBar translucent backgroundColor="transparent" />
				</SafeAreaView>
			)}
		</View>
	);
};

export default ResultsPage;
