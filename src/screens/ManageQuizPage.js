import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import { styles } from '../styles/screens/ManageQuizStyle';
import { Quiz } from '../components/Quiz';
import { fetchQuizzes, filterSearch } from '../utilities/Index';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ManageQuizPage = ({ navigation }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setQuizzes([]);
      fetchQuizzes(setQuizzes);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setFilteredData(quizzes);
  }, [quizzes]);

  const createQuiz = () => {
    if (Platform.OS === 'ios') {
      navigation.navigate('createquizpage');
    } else {
      alert('You can only create a quiz on an IOS device.\n\nFor now');
    }
  };

  return (
    <ScrollView bounces={false}>
      <Text style={styles.header}>Manage Quizzes</Text>
      <TouchableOpacity
        style={styles.btnBackToHome}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.knapptext}>X</Text>
      </TouchableOpacity>
      <View style={styles.searchsection}>
        <FontAwesome
          name="search"
          size={14}
          color={'#939393'}
          style={styles.searchicon}
        />
        <TextInput
          style={styles.searchinput}
          onChangeText={(text) => filterSearch(text, quizzes, setFilteredData)}
          placeholder="Quiz name"
        />
      </View>
      <SafeAreaView style={styles.container}>
        {filteredData.map((value) => (
          <Quiz
            id={value.id}
            name={value.name}
            navigation={navigation}
            description={value.info}
            duration={value.duration}
            users={value.users}
            questions={value.questions}
            quizzes={quizzes}
            setQuizzes={setQuizzes}
            key={value.id}
          />
        ))}
        <TouchableOpacity style={styles.create} onPress={() => createQuiz()}>
          <Text style={styles.createtext}>Create Quiz</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ManageQuizPage;
