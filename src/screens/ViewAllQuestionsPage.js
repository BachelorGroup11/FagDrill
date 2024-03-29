import { View, Text, ScrollView, LogBox } from "react-native";
import { GoBack, Question } from "../components/Index";

const ViewAllQuestionsPage = ({ navigation, route }) => {
	const { questions, setQuestions } = route.params;
	LogBox.ignoreLogs([
		"Non-serializable values were found in the navigation state",
	]);

	return (
		<View>
			<GoBack style={{ bottom: 5 }} />
			<Text
				style={{ fontFamily: "PoppinsBold", fontSize: 32, left: 22, top: 30 }}
			>
				All Questions
			</Text>
			<ScrollView style={{ marginTop: 50, marginBottom: 100 }}>
				<View style={{ marginTop: 50 }}>
					{questions.map((item, index) => (
						<Question
							count={index + 1}
							type={item.type}
							title={item.question}
							questions={questions}
							setQuestions={setQuestions}
							key={index}
						/>
					))}
				</View>
			</ScrollView>
		</View>
	);
};
export default ViewAllQuestionsPage;
