import { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, StatusBar, Text } from 'react-native';
import { styles } from '../styles/screens/ResultsStyle';
import { GoBack, Result } from '../components/Index';
import { db } from '../../firebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ResultsPage = ({ navigation }) => {
	const [resultsArray, setResultsArray] = useState([]);

	useEffect(() => {
		const auth = getAuth();
		const user = auth.currentUser;

		const fetchData = async () => {
			const userQuery = query(
				collection(db, 'results'),
				where('user_id', '==', user.uid)
			);

			const querySnapshot = await getDocs(userQuery);
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
	);
};

export default ResultsPage;
