import { useState } from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "../styles/screens/AddQuestionStyle";
import { SelectList } from "react-native-dropdown-select-list";
import { GoBack } from "../components/GoBack";
import {
	AddMultipleChoice,
	AddTrueOrFalse,
	AddFillInBlank,
} from "../components/Index";

const AddQuestionPage = ({ navigation, route }) => {
	const [selected, setSelected] = useState("Multiple choice");
	const data = ["Multiple choice", "True or false", "Fill in the blank"];
	const { destination } = route.params;

	return (
		<ScrollView style={styles.container}>
			<GoBack nav={navigation} destination={"createquizpage"} />
			<Text style={styles.header}>Add Question</Text>
			<SelectList
				setSelected={(val) => setSelected(val)}
				data={data}
				save="value"
				search={false}
				placeholder="Multiple choice"
				defaultOption={"Multiple choice"}
				boxStyles={styles.boxstyles}
				dropdownStyles={styles.dropdownstyles}
			/>
			{selected === "Multiple choice" && (
				<AddMultipleChoice navigation={navigation} destination={destination} />
			)}
			{selected === "True or false" && (
				<AddTrueOrFalse navigation={navigation} destination={destination} />
			)}
			{selected === "Fill in the blank" && (
				<AddFillInBlank navigation={navigation} destination={destination} />
			)}
		</ScrollView>
	);
};
export default AddQuestionPage;
