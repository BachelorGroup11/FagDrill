import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '../styles/components/QuizStyle';

export const Quiz = ({ name, description, numofquestions, numofusers }) => {
	return (
		<View style={styles.container}>
			<View style={{ width: '80%' }}>
				<View style={{ paddingTop: 20, paddingLeft: 20 }}>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.description}>{description}</Text>
				</View>
				<Text style={styles.questions}>{numofquestions} questions</Text>
				<Text style={styles.users}>Visible to {numofusers} users</Text>
			</View>
			<View style={styles.rightsection}>
				<View style={{ height: '100%' }}>
					<TouchableOpacity style={styles.editsection}>
						<FontAwesome name="edit" size={25} color={'#FFFFFF'} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.deletesection}>
						<FontAwesome name="trash" size={25} color={'#FFFFFF'} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
