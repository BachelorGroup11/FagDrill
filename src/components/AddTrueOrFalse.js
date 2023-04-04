import { useState } from 'react';
import {
	KeyboardAvoidingView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { styles } from '../styles/components/AddTrueOrFalseStyle';
import Checkbox from 'expo-checkbox';

export const AddTrueOrFalse = ({ navigation }) => {
	const [question, setQuestion] = useState('');
	const [summary, setSummary] = useState('');
	const [isChecked, setChecked] = useState({ setTrue: false, setFalse: false });

	const getTrueOrFalse = (obj) => Object.keys(obj).find((i) => obj[i] === true);

	const handleSubmit = () => {
		if (question === '') return alert('Please enter question');
		let trueorfalse = getTrueOrFalse(isChecked);
		if (trueorfalse === undefined) return alert('Please select true or false');

		navigation.navigate('createquizpage', {
			question: question,
			options: ['True', 'False'],
			type: 'True or false',
			answer: trueorfalse === 'setTrue' ? 0 : 1,
			summary: summary,
		});
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior={'position'}>
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
				placeholder={'Tap to add summary'}
				placeholderTextColor={'grey'}
			/>
			<View style={styles.buttons}>
				<View style={[styles.inputcontainer, { zIndex: 1 }]}>
					<TouchableOpacity
						style={[
							styles.answerinput,
							{ backgroundColor: '#12D18E', borderBottomColor: '#00B777' },
						]}
						onPress={() =>
							setChecked({ setTrue: !isChecked.setTrue, setFalse: false })
						}
					>
						<Text style={styles.answertext}>True</Text>
						<Checkbox
							style={styles.checkbox}
							value={isChecked.setTrue}
							onValueChange={setChecked}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.inputcontainer}>
					<TouchableOpacity
						style={[
							styles.answerinput,
							{ backgroundColor: '#F75555', borderBottomColor: '#EA1E61' },
						]}
						onPress={() =>
							setChecked({ setTrue: false, setFalse: !isChecked.setFalse })
						}
					>
						<Text style={styles.answertext}>False</Text>
						<Checkbox
							style={styles.checkbox}
							value={isChecked.setFalse}
							onValueChange={setChecked}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity style={styles.save} onPress={() => handleSubmit()}>
				<Text style={styles.savetext}>Submit</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};
