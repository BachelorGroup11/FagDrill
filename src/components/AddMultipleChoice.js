import { useState } from 'react';
import {
	KeyboardAvoidingView,
	View,
	TextInput,
	TouchableOpacity,
	Text,
} from 'react-native';
import { styles } from '../styles/components/AddMultipleChoiceStyle';
import Checkbox from 'expo-checkbox';

export const AddMultipleChoice = ({ navigation, destination }) => {
	const numbers = { 0: 'one', 1: 'two', 2: 'three', 3: 'four' };
	const [question, setQuestion] = useState('');
	const [summary, setSummary] = useState('');
	const [answer, setAnswer] = useState({
		one: '',
		two: '',
		three: '',
		four: '',
	});
	const [isChecked, setChecked] = useState({
		one: false,
		two: false,
		three: false,
		four: false,
	});

	const getTrueOrFalse = (obj) => Object.keys(obj).find((i) => obj[i] === true);
	const checkAnswers = (obj) => Object.keys(obj).find((i) => obj[i] === '');
	const getKeyByValue = (obj, val) =>
		Object.keys(obj).find((key) => obj[key] === val);

	const handleSubmit = () => {
		if (question === '') return alert('Please enter question');
		if (checkAnswers(answer) !== undefined)
			return alert('Please enter all answer fields');
		let correctIndex = getTrueOrFalse(isChecked);
		if (correctIndex === undefined)
			return alert('Please choose correct option');
		let correctIndexInteger = getKeyByValue(numbers, correctIndex);

		navigation.navigate(destination, {
			question: question,
			options: Object.values(answer),
			type: 'Multiple choice',
			answer: parseInt(correctIndexInteger),
			summary: summary,
		});
	};

	return (
		<KeyboardAvoidingView
			style={{ flex: 1, height: 520 }}
			behavior={'position'}
		>
			<TextInput
				style={styles.input}
				onChangeText={setQuestion}
				value={question}
				placeholder={'Tap to add question'}
				placeholderTextColor={'grey'}
			/>
			<TextInput
				style={styles.summary}
				onChangeText={setSummary}
				value={summary}
				placeholder={'Tap to add sumary'}
				placeholderTextColor={'grey'}
			/>
			<View style={styles.inputcontainer}>
				<TextInput
					style={styles.answerinput}
					onChangeText={(text) => setAnswer({ ...answer, one: text })}
					value={answer.one}
					placeholder={'Add answer'}
					placeholderTextColor={'#CACACA'}
				/>
				<Checkbox
					style={styles.checkbox}
					value={isChecked.one}
					onValueChange={() => setChecked({ one: true })}
				/>
			</View>
			<View style={styles.inputcontainer}>
				<TextInput
					style={styles.answerinput}
					onChangeText={(text) => setAnswer({ ...answer, two: text })}
					value={answer.two}
					placeholder={'Add answer'}
					placeholderTextColor={'#CACACA'}
				/>
				<Checkbox
					style={styles.checkbox}
					value={isChecked.two}
					onValueChange={() => setChecked({ two: true })}
				/>
			</View>
			<View style={styles.inputcontainer}>
				<TextInput
					style={styles.answerinput}
					onChangeText={(text) => setAnswer({ ...answer, three: text })}
					value={answer.three}
					placeholder={'Add answer'}
					placeholderTextColor={'#CACACA'}
				/>
				<Checkbox
					style={styles.checkbox}
					value={isChecked.three}
					onValueChange={() => setChecked({ three: true })}
				/>
			</View>
			<View style={styles.inputcontainer}>
				<TextInput
					style={styles.answerinput}
					onChangeText={(text) => setAnswer({ ...answer, four: text })}
					value={answer.four}
					placeholder={'Add answer'}
					placeholderTextColor={'#CACACA'}
				/>
				<Checkbox
					style={styles.checkbox}
					value={isChecked.four}
					onValueChange={() => setChecked({ four: true })}
				/>
			</View>
			<TouchableOpacity style={styles.save} onPress={() => handleSubmit()}>
				<Text style={styles.savetext}>Submit</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};
