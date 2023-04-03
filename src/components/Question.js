import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/components/QuestionStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Question = ({ count, type, title }) => {
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
				<TouchableOpacity>
					<FontAwesome name="trash" size={20} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
