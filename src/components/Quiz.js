import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/components/QuizStyle';
import { db } from '../../firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Quiz = ({
	id,
	navigation,
	name,
	description,
	duration,
	users,
	questions,
	quizzes,
	setQuizzes,
}) => {
	const deleteQuiz = () => {
		return Alert.alert('', `Are you sure you wish to delete ${name}?`, [
			{ text: 'Cancel' },
			{
				text: 'Confirm',
				onPress: async () => {
					await deleteDoc(doc(db, 'quizzes', id));
					setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
				},
			},
		]);
	};

	return (
		<View style={styles.container}>
			<View style={{ width: '80%' }}>
				<View style={{ paddingTop: 20, paddingLeft: 20 }}>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.description}>{description}</Text>
				</View>
				<Text style={styles.questions}>{questions.length} questions</Text>
				<Text style={styles.users}>Visible to {users.length} users</Text>
			</View>
			<View style={styles.rightsection}>
				<View style={{ height: '100%' }}>
					<TouchableOpacity
						style={styles.editsection}
						onPress={() =>
							navigation.navigate('editquizpage', {
								id: id,
								title: name,
								description: description,
								duration: duration,
								users: users,
								questions: questions,
							})
						}
					>
						<FontAwesome name="edit" size={25} color={'#FFFFFF'} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.deletesection} onPress={deleteQuiz}>
						<FontAwesome name="trash" size={25} color={'#FFFFFF'} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
