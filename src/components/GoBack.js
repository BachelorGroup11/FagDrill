import { styles } from '../styles/components/GoBackStyle';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Component responsible for rendering navigate back symbol in top left corner of application
export const GoBack = ({ destination }) => {
	const navigation = useNavigation();

	return (
		<View style={{ zIndex: 1 }}>
			<TouchableOpacity
				style={styles.btnBack}
				onPress={() => navigation.navigate(destination)}
			>
				<Text style={styles.knapptext}>X</Text>
			</TouchableOpacity>
		</View>
	);
};
