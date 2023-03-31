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
import { GoBack } from '../components/GoBack';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const CreateQuizPage = ({ navigation }) => {
	const [users, setUsers] = useState([]);
	const [title, setTitle] = useState('Enter title');
	const [description, setDescription] = useState('Enter description');
	const [selected, setSelected] = useState('');

	useEffect(() => {
		setUsers([]);
		const fetchUsers = async () => {
			const querySnapshot = await getDocs(collection(db, 'users'));
			querySnapshot.forEach((doc) => {
				setUsers((previousArray) => [...previousArray, doc.data().email]);
			});
		};
		fetchUsers();
	}, []);

	const data = [
		{ key: '1', value: 'Mobiles', disabled: true },
		{ key: '2', value: 'Appliances' },
		{ key: '3', value: 'Cameras' },
		{ key: '4', value: 'Computers', disabled: true },
		{ key: '5', value: 'Vegetables' },
		{ key: '6', value: 'Diary Products' },
		{ key: '7', value: 'Drinks' },
	];

	return (
		<ScrollView>
			<GoBack nav={navigation} destination={'userpage'} />
			<Text style={styles.header}>Create Quiz</Text>
			<SafeAreaView style={styles.container}>
				<Text style={styles.title}>Title</Text>
				<TextInput
					style={styles.input}
					onChangeText={setTitle}
					value={title}
					keyboardType="default"
				/>
				<Text style={styles.title}>Description</Text>
				<TextInput
					style={styles.input}
					onChangeText={setDescription}
					value={description}
					keyboardType="default"
				/>
				<Text style={styles.title}>Visible to</Text>
				<MultipleSelectList
					setSelected={(val) => setSelected(val)}
					data={users}
					save="value"
					search={false}
					boxStyles={{
						borderColor: '#3F51B5',
						borderWidth: 0,
						borderBottomWidth: 1,
						marginTop: -10,
					}}
					inputStyles={{
						color: 'grey',
						marginTop: 15,
					}}
				/>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 5,
					}}
				>
					<Text style={styles.questions}>Questions (0)</Text>
					<TouchableOpacity>
						<Text style={styles.viewall}>
							View all {<FontAwesome name="arrow-right" />}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttons}>
					<TouchableOpacity style={styles.save}>
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
