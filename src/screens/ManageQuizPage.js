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
import { GoBack } from '../components/GoBack';
import { Quiz } from '../components/Quiz';
import { fetchQuizzes } from '../utilities/fetchQuizzes';
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

  const filterSearch = (text) => {
    if (text) {
      const newData = quizzes.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(quizzes);
    }
  };
  
  const createQuiz = () => {
		if (Platform.OS === 'ios') {
			navigation.navigate('createquizpage')
		}else{
			alert("You can only create a quiz on an IOS device.\n\nFor now")
		}
	};

  return (
    <ScrollView bounces={false}>
      <GoBack />
      <Text style={styles.header}>Manage Quizzes</Text>
      <View style={styles.searchsection}>
        <FontAwesome
          name="search"
          size={14}
          color={'#939393'}
          style={styles.searchicon}
        />
        <TextInput
          style={styles.searchinput}
          onChangeText={(text) => filterSearch(text)}
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
        <TouchableOpacity
          style={styles.create}
          onPress={() => createQuiz()}
        >
          <Text style={styles.createtext}>Create Quiz</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ManageQuizPage;
