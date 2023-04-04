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
import { collection, getDocs, doc, addDoc, setDoc } from 'firebase/firestore';
import { GoBack, Question } from '../components/Index';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const CreateQuizPage = ({ navigation, route }) => {
	const [users, setUsers] = useState([]);
	const [questions, setQuestions] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selected, setSelected] = useState('');

	useEffect(() => {
		setUsers([]);
		const fetchUsers = async () => {
			const querySnapshot = await getDocs(collection(db, 'users'));
			querySnapshot.forEach((doc) => {
				setUsers((previousArray) => [
					...previousArray,
					{ email: doc.data().email, id: doc.data().user_id },
				]);
			});
		};
		fetchUsers().catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		if (route.params === undefined) return;
		setQuestions((prevArray) => [...prevArray, route.params]);
	}, [route.params]);

	const saveQuiz = async () => {
		const quizRef = doc(collection(db, 'quizzes'));
		let userIds = selected.map(
			(index) => users.find((user) => user.email === index).id
		);
		let questionIds = [];

		for (let i = 0; i < questions.length; i++) {
			const questionRef = await addDoc(collection(db, 'questions'), {
				question_text: questions[i].question,
				options: questions[i].options,
				quizzes: [quizRef.id],
				correct_answer:
					questions[i].type === 'Multiple choice'
						? parseInt(questions[i].answer)
						: questions[i].answer,
				category:
					questions[i].type === 'True or false'
						? 'true_or_false'
						: questions[i].type === 'Multiple choice'
						? 'multiple_choice'
						: 'fill_in_blank',
			});
			questionIds.push(questionRef.id);
		}

		await setDoc(doc(db, 'quizzes', quizRef.id), {
			name: title,
			info: description,
			users: userIds,
			questions: questionIds,
		});
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
