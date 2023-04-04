import { useEffect, useState } from 'react';
import {
	ScrollView,
	View,
	Text,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import { styles } from '../styles/screens/CreateQuizStyle';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { db } from '../../firebaseConfig';
import { collection, doc } from 'firebase/firestore';
import { GoBack, Question } from '../components/Index';
import { fetchUsers } from '../utilities/fetchUsers';
import { addQuiz } from '../utilities/addQuiz';
import { addQuestions } from '../utilities/addQuestions';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const CreateQuizPage = ({ navigation, route }) => {
	const [users, setUsers] = useState([]);
	const [questions, setQuestions] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selected, setSelected] = useState('');

	useEffect(() => {
		setUsers([]);
		fetchUsers(setUsers).catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		if (route.params === undefined) return;
		setQuestions((prevArray) => [...prevArray, route.params]);
	}, [route.params]);

	const saveQuiz = async () => {
		const quizRef = doc(collection(db, 'quizzes'));
		const userIds = selected.map(
			(index) => users.find((user) => user.email === index).id
		);
		const questionIds = await addQuestions(quizRef, questions);
		addQuiz(title, description, quizRef, userIds, questionIds);
	};

	return (
		<ScrollView style={{ backgroundColor: '#FFFFFF' }}>
			<GoBack nav={navigation} destination={'userpage'} />
			<Text style={styles.header}>Create Quiz</Text>
			<SafeAreaView style={styles.container}>
				<Text style={styles.title}>Title</Text>
				<TextInput
					style={styles.input}
					onChangeText={setTitle}
					value={title}
					placeholder={'Enter title'}
					placeholderTextColor={'#757A86'}
				/>
				<Text style={styles.title}>Description</Text>
				<TextInput
					style={styles.input}
					onChangeText={setDescription}
					value={description}
					placeholder={'Enter description'}
					placeholderTextColor={'#757A86'}
				/>
				<Text style={styles.title}>Visible to</Text>
				<MultipleSelectList
					setSelected={(val) => setSelected(val)}
					data={users.map((user) => user.email)}
					//data={//users.map((user) => Object.keys(user))}
					save="value"
					search={false}
					boxStyles={styles.boxstyles}
					inputStyles={styles.inputstyles}
				/>
				<View style={styles.questionscontainer}>
					<Text style={styles.questions}>Questions</Text>
					<TouchableOpacity>
						<Text style={styles.viewall}>
							View all {<FontAwesome name="arrow-right" />}
						</Text>
					</TouchableOpacity>
				</View>
				<ScrollView style={{ height: 220 }}>
					{questions.map((item, index) => (
						<Question
							count={index + 1}
							type={item.type}
							title={item.question}
							key={index}
						/>
					))}
				</ScrollView>
				<View style={styles.buttons}>
					<TouchableOpacity style={styles.save} onPress={() => saveQuiz()}>
						<Text style={styles.savetext}>Save</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.add}
						onPress={() => navigation.navigate('addquestionpage')}
					>
						<Text style={styles.addtext}>Add Question</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

export default CreateQuizPage;
