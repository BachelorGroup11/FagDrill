import { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from '../styles/screens/AddQuestionStyle';
import { SelectList } from 'react-native-dropdown-select-list';
import { GoBack } from '../components/GoBack';
import {
	AddMultipleChoice,
	AddTrueOrFalse,
	AddFillInBlank,
} from '../components/Index';

const AddQuestionPage = ({ navigation }) => {
	const [selected, setSelected] = useState('Multiple choice');
	const data = ['Multiple choice', 'True or false', 'Fill in the blank'];

	return (
		<ScrollView style={styles.container}>
			<GoBack nav={navigation} destination={'createquizpage'} />
			<Text style={styles.header}>Add Question</Text>
			<SelectList
				setSelected={(val) => setSelected(val)}
				data={data}
				save="value"
				search={false}
				placeholder="Multiple choice"
				defaultOption={'Multiple choice'}
				boxStyles={styles.boxstyles}
				dropdownStyles={styles.dropdownstyles}
			/>
			{selected === 'Multiple choice' && (
				<AddMultipleChoice navigation={navigation} />
			)}
			{selected === 'True or false' && (
				<AddTrueOrFalse navigation={navigation} />
			)}
			{selected === 'Fill in the blank' && (
				<AddFillInBlank navigation={navigation} />
			)}
		</ScrollView>
	);
};
export default AddQuestionPage;
