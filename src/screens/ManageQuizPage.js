import { useEffect, useState } from "react";
import { Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { styles } from "../styles/screens/ManageQuizStyle";
import { GoBack } from "../components/GoBack";
import { Quiz } from "../components/Quiz";
import { fetchQuizzes } from "../utilities/fetchQuizzes";

const ManageQuizPage = ({ navigation }) => {
	const [quizzes, setQuizzes] = useState([]);

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			setQuizzes([]);
			fetchQuizzes(setQuizzes);
		});
		return unsubscribe;
	}, [navigation]);

	return (
		<ScrollView bounces={false}>
			<GoBack nav={navigation} />
			<Text style={styles.header}>Manage Quizzes</Text>
			<SafeAreaView style={styles.container}>
				{quizzes.map((value) => (
					<Quiz
						id={value.id}
						name={value.name}
						navigation={navigation}
						description={value.info}
						users={value.users}
						questions={value.questions}
						quizzes={quizzes}
						setQuizzes={setQuizzes}
						key={value.id}
					/>
				))}
				<TouchableOpacity
					style={styles.create}
					onPress={() => navigation.navigate("createquizpage")}
				>
					<Text style={styles.createtext}>Create Quiz</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ScrollView>
	);
};

export default ManageQuizPage;
