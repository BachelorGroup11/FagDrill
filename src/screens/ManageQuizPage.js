import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { styles } from '../styles/screens/ManageQuizStyle';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { GoBack } from '../components/GoBack';
import { Quiz } from '../components/Quiz';

const ManageQuizPage = ({ navigation }) => {
	const [quizzes, setQuizzes] = useState([]);

	useEffect(() => {
		setQuizzes([]);
		const fetchQuizzes = async () => {
			const querySnapshot = await getDocs(collection(db, 'quizzes'));
			querySnapshot.forEach((doc) => {
				setQuizzes((previousArray) => [
					...previousArray,
					{
						name: doc.data().name,
						info: doc.data().info,
						questions: doc.data().questions.length,
						users: doc.data().users.length,
					},
				]);
			});
		};
		fetchQuizzes().catch((error) => console.log(error));
	}, []);

	return (
		<ScrollView bounces={false}>
			<GoBack nav={navigation} destination={'userpage'} />
			<Text style={styles.header}>Manage Quizzes</Text>
			<SafeAreaView style={styles.container}>
				{quizzes.map((value) => (
					<Quiz
						name={value.name}
						description={value.info}
						numofquestions={value.questions}
						numofusers={value.users}
						key={value.name}
					/>
				))}
				<TouchableOpacity
					style={styles.create}
					onPress={() => navigation.navigate('createquizpage')}
				>
					<Text style={styles.createtext}>Create Quiz</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ScrollView>
	);
};

export default ManageQuizPage;
