import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/components/GoToOverviewStyle';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const GoToOverview = ({ id, name, description, users, questions }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('quizoverviewpage', {
          id: id,
          name: name,
          users: users,
          questions: questions,
        })
      }
    >
      <View style={{ width: '82%' }}>
        <View style={{ paddingTop: 20, paddingLeft: 20 }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Text style={styles.questions}>{questions.length} questions</Text>
        <Text style={styles.users}>Visible to {users.length} users</Text>
      </View>
      <View style={styles.rightsection}>
        <View style={styles.editsection}>
          <FontAwesome name="arrow-right" size={24} color={'#FFFFFF'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
