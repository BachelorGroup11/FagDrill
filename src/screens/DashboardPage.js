import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GoBack, GoToOverview } from '../components/Index';
import { fetchQuizzes } from '../utilities/fetchQuizzes';
import { styles } from '../styles/screens/DashboardStyle';

const DashboardPage = ({}) => {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setQuizzes([]);
    fetchQuizzes(setQuizzes);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <GoBack style={{ top: '3%' }} />
      <View style={{ marginTop: '35%' }}>
        {quizzes.map((value, index) => (
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
