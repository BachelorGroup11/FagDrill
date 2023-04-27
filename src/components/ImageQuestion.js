import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/components/ImageQuestionStyle';
import { storage } from '../../firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';
import { Option } from './Option';

export const ImageQuestion = ({ state, dispatch }) => {
	const [image, setImage] = useState(null);

	let has_been_answered = state.answeredArray.find(
		(x) => x.index === state.index
	);

	useEffect(() => {
		downloadImage();
	}, []);

	const downloadImage = () => {
		getDownloadURL(ref(storage, state.image))
			.then((url) => {
				setImage(url);
			})
			.catch((e) => console.log('Errors while downloading => ', e));
	};

	return (
		<View>
			{image && (
				<Image
					source={{ uri: image }}
					style={{
						width: 200,
						height: 200,
						alignSelf: 'center',
						borderRadius: 5,
					}}
				/>
			)}
			<View style={styles.QuestionContainer}>
				<Text style={styles.QuestionText}>{state.questionText}</Text>
			</View>
			{typeof has_been_answered !== 'undefined' && (
				<View style={styles.summary}>
					<Text style={styles.summaryText}>{state.summary}</Text>
				</View>
			)}
			<View style={styles.btncontainer}>
				{state.options.map((option, idx) => (
					<Option
						value={option}
						key={idx}
						id={idx}
						state={state}
						dispatch={dispatch}
						style={styles.btnchoice}
					/>
				))}
			</View>
		</View>
	);
};
