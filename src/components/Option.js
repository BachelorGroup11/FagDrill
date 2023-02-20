import { styles } from '../styles/PlayStyle';
import { Text, TouchableOpacity, View } from 'react-native';

export const Option = ({ value, id, handleClick }) => {
	return (
		<View>
			<TouchableOpacity
				style={styles.btnChoice}
				onPress={() => handleClick(id)}
			>
				<Text style={styles.btnText}>{value}</Text>
			</TouchableOpacity>
		</View>
	);
};
