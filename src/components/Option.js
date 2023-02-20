import { styles } from '../styles/PlayStyle';
import {
	Text,
	TouchableOpacity,
	StatusBar,
	ImageBackground,
	View,
} from 'react-native';

export const Option = ({ value }) => {
	const test = ['wrong', 'wrong', 'wrong', 'wrong'];

	return (
		<View>
			<TouchableOpacity style={styles.btnChoice}>
				<Text style={styles.btnText}>{value}</Text>
			</TouchableOpacity>
		</View>
	);
};
