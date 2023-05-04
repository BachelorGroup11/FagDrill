import { useEffect, useState } from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import { styles } from '../styles/screens/DashboardStyle';
import { GoBack, GoToOverview } from '../components/Index';
import { fetchQuizzes, filterSearch } from '../utilities/Index';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const DashboardPage = ({}) => {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setQuizzes([]);
    fetchQuizzes(setQuizzes);
  }, []);

  useEffect(() => {
    setFilteredData(quizzes);
  }, [quizzes]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <GoBack style={{ top: '3%' }} />
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
      <View style={{ marginTop: '35%' }}>
        {filteredData.map((value, index) => (
          <GoToOverview
            id={value.id}
            name={value.name}
            description={value.info}
            users={value.users}
            questions={value.questions}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default DashboardPage;
