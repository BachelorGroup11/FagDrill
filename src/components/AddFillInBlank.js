import { useState } from 'react';
import {
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
	Text,
} from 'react-native';
import { styles } from '../styles/components/AddFillInBlankStyle';

export const AddFillInBlank = ({ navigation }) => {
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');

	const handleSubmit = () => {
		if (question === '') return alert('Please answer question');
		if (answer === '') return alert('Please enter answer');

		navigation.navigate('createquizpage', {
			question: question,
			options: null,
			type: 'Fill in the blank',
			answer: answer,
		});
	};

	return (
		<KeyboardAvoidingView behavior={'position'}>
			<TextInput
				style={styles.input}
				onChangeText={setQuestion}
				value={question}
				placeholder={'Tap to add question'}
				placeholderTextColor={'grey'}
			/>
			<TextInput
				style={styles.answerinput}
				onChangeText={setAnswer}
				value={answer}
				placeholder={'Tap to add add answer'}
				placeholderTextColor={'grey'}
			/>
			<TouchableOpacity style={styles.save} onPress={() => handleSubmit()}>
				<Text style={styles.savetext}>Submit</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};
