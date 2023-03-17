import { styles } from '../styles/components/LoadingAnimation';
import { ActivityIndicator, View } from 'react-native';

// Loading spinner
export const LoadingAnimation = () => {
	return (
		<View style={[styles.container, styles.horizontal]}>
			<ActivityIndicator size="large" color="#3F51B5" />
		</View>
	);
};
