import { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { GoBack } from '../components/GoBack';
import { fetchQuizzes } from '../utilities/fetchQuizzes';
import { styles } from '../styles/screens/DashboardStyle';
import { FontAwesome } from '@expo/vector-icons';

const DashboardPage = ({ navigation }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setQuizzes([]);
    fetchQuizzes(setQuizzes);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <GoBack style={{ bottom: 10 }} />

      <TouchableOpacity
        style={styles.container2}
        onPress={() =>
          navigation.navigate('quizoverviewpage', {
            id: quizzes[0].id,
            users: quizzes[0].users,
            questions: quizzes[0].questions,
          })
        }
      >
        <View style={{ width: '70%' }}>
          <View style={{ paddingTop: 20, paddingLeft: 20 }}>
            <Text style={styles.title}>Quiz 1</Text>
            <Text style={styles.description}>This is the first quiz</Text>
          </View>
          <Text style={styles.questions}>5 questions</Text>
          <Text style={styles.users}>Visible to 10 users</Text>
        </View>
        <View style={styles.rightsection}>
          <View style={styles.editsection}>
            <FontAwesome name="arrow-right" size={24} color={'#FFFFFF'} />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DashboardPage;
