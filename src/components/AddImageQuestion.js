import { useState } from 'react';
import {
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	View,
} from 'react-native';
import { styles } from '../styles/components/AddImageQuestionStyle';
import * as ImagePicker from 'expo-image-picker';
import Checkbox from 'expo-checkbox';
import { storage } from '../../firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';

export const AddImageQuestion = ({ navigation, destination }) => {
	const numbers = { 0: 'one', 1: 'two', 2: 'three', 3: 'four' };
	const [image, setImage] = useState(null);
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

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		setImage(result.assets[0].uri);
	};

	const getBlobFromUri = async (uri) => {
		const blob = await new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.onload = function () {
				resolve(xhr.response);
			};
			xhr.onerror = function (e) {
				reject(new TypeError('Network request failed'));
			};
			xhr.responseType = 'blob';
			xhr.open('GET', uri, true);
			xhr.send(null);
		});

		return blob;
	};

	const uploadImage = async () => {
		const filename = image.substring(image.lastIndexOf('/') + 1, image.length);
		const storageRef = ref(storage, filename);
		const blob = await getBlobFromUri(image);

		uploadBytes(storageRef, blob);
		return filename;
	};

	const getTrueOrFalse = (obj) => Object.keys(obj).find((i) => obj[i] === true);
	const checkAnswers = (obj) => Object.keys(obj).find((i) => obj[i] === '');
	const getKeyByValue = (obj, val) =>
		Object.keys(obj).find((key) => obj[key] === val);

	const handleSubmit = async () => {
		if (question === '') return alert('Please enter question');
		if (checkAnswers(answer) !== undefined)
			return alert('Please enter all answer fields');
		let correctIndex = getTrueOrFalse(isChecked);
		if (correctIndex === undefined)
			return alert('Please choose correct option');
		let correctIndexInteger = getKeyByValue(numbers, correctIndex);
		let filename = await uploadImage();

		navigation.navigate(destination, {
			question: question,
			options: Object.values(answer),
			type: 'Image question',
			answer: parseInt(correctIndexInteger),
			summary: summary,
			image: filename,
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
			<TouchableOpacity style={styles.pickimage} onPress={pickImage}>
				<Text
					style={{
						color: '#767575',
						fontFamily: 'PoppinsSemiBold',
						fontSize: 12,
					}}
				>
					Tap to pick an image from camera roll
				</Text>
			</TouchableOpacity>
			{image && (
				<Image
					source={{ uri: image }}
					style={{
						width: 200,
						height: 200,
						alignSelf: 'center',
						borderRadius: 5,
						marginBottom: 10,
					}}
				/>
			)}
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
