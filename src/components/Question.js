import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/components/QuestionStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Question = ({ count, type, title, questions, setQuestions }) => {
	const deleteQuestion = async () => {
		return Alert.alert('', `Are you sure you wish to delete ${title}?`, [
			{ text: 'Cancel' },
			{
				text: 'Confirm',
				onPress: async () => {
					setQuestions(
						questions.filter((current) => current.question !== title)
					);
				},
			},
		]);
	};
	return (
		<View style={styles.container}>
			<View style={{ width: '80%' }}>
				<Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 14 }}>
					{count} - {type}
				</Text>
				<Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14 }}>
					{title}
				</Text>
			</View>
			<View style={styles.deletesection}>
				<TouchableOpacity onPress={deleteQuestion}>
					<FontAwesome name="trash" size={20} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
