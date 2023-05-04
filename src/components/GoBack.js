import { styles } from '../styles/components/GoBackStyle';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Component responsible for rendering navigate back symbol in top left corner of application, specify which screen to navigate to as prop
export const GoBack = ({ style }) => {
  const navigation = useNavigation();
  return (
    // Set zIndex to 1 to ensure component is always pressable
    <View style={[{ zIndex: 1 }, style]}>
      <TouchableOpacity
        style={styles.btnBack}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.knapptext}>X</Text>
      </TouchableOpacity>
    </View>
  );
};
