import { useState } from 'react';
import {
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { styles } from '../styles/screens/AddQuestionStyle';
import { SelectList } from 'react-native-dropdown-select-list';
import { GoBack } from '../components/GoBack';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const AddQuestionPage = ({ navigation }) => {
	const [text, setText] = useState('Tap to add question');
	const [answer, setAnswer] = useState('Add Answer');
	const [selected, setSelected] = useState('');

	const data = [
		{ key: '1', value: 'Multiple choice' },
		{ key: '2', value: 'True or false' },
		{ key: '3', value: 'Fill in the blank' },
	];

	return (
		<ScrollView style={{ backgroundColor: 'white' }}>
			<GoBack nav={navigation} destination={'createquizpage'} />
			<Text style={styles.header}>Add Question</Text>
			<SafeAreaView style={styles.container}>
				<SelectList
					setSelected={(val) => setSelected(val)}
					data={data}
					save="value"
					search={false}
					defaultOption={{ key: '1', value: 'Multiple choice' }}
					boxStyles={{
						borderColor: '#3F51B5',
						borderWidth: 1,
						width: 200,
						marginHorizontal: 12,
					}}
					dropdownStyles={{
						color: '#3F51B5',
						borderColor: '#3F51B5',
						width: 200,
						marginHorizontal: 12,
					}}
				/>
				<TextInput
					style={styles.input}
					onChangeText={setText}
					value={text}
					keyboardType="default"
				/>
				<TextInput
					style={styles.answerinput}
					onChangeText={setAnswer}
					value={answer}
					keyboardType="default"
				/>
				<TextInput
					style={styles.answerinput}
					onChangeText={setAnswer}
					value={answer}
					keyboardType="default"
				/>
				<TextInput
					style={styles.answerinput}
					onChangeText={setAnswer}
					value={answer}
					keyboardType="default"
				/>
				<TextInput
					style={styles.answerinput}
					onChangeText={setAnswer}
					value={answer}
					keyboardType="default"
				/>
				<TouchableOpacity style={styles.save}>
					<Text style={styles.savetext}>
						{<FontAwesome name="check" size={24} />}
					</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ScrollView>
	);
};
export default AddQuestionPage;
