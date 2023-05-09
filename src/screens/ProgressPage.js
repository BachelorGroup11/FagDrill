import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/ProgressStyle';
import { LineChart } from 'react-native-chart-kit';
import { fetchScore } from '../utilities/fetchScore';
import { fetchDate } from '../utilities/fetchDate';
import { LoadingAnimation } from '../components/Index';
import { db } from '../../firebaseConfig';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ProgressPage = ({ navigation }) => {
  const [scoresArray, setScoresArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  // Fetch quiz data from Firestore and store it in the state
  useEffect(() => {
    const fetchQuizzes = async () => {
      const quizQuery = query(
        collection(db, 'quizzes'),
        where('users', 'array-contains', user.uid)
      );

      const quizzesSnapshot = await getDocs(quizQuery);
      const quizzes = quizzesSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setQuizData(quizzes);
      setSelectedQuiz(quizzes[0] || {});
    };
    fetchQuizzes();
  }, []);

  // Resets the chart and fetches the score and date for the appropriate quiz
  useEffect(() => {
    setScoresArray([]);
    setDateArray([]);
    if (selectedQuiz.id) {
      setIsLoading(true);
      fetchScore(setScoresArray, selectedQuiz.id)
        .then(() => fetchDate(setDateArray, selectedQuiz.id))
        .finally(() => setIsLoading(false));
    }
  }, [selectedQuiz]);

  return (
    <ImageBackground
      source={require('../assets/images/progress_bg.png')}
      style={{ flex: 1, width: null, alignSelf: 'stretch' }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Progress</Text>
          <TouchableOpacity
            style={styles.btnBackToHome}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.knapptext}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chart}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <LoadingAnimation />
            </View>
          ) : scoresArray.length > 0 ? (
            // Shows the last 5 Results
            <LineChart
              data={{
                labels: dateArray.slice(-5),
                datasets: [
                  {
                    data: scoresArray.slice(-5),
                  },
                ],
                legend: [`${scoresArray.length} Last Scores`],
              }}
              width={Dimensions.get('window').width * 0.90}
              height={Dimensions.get('window').height * 0.23}
              yAxisInterval={1}
              withInnerLines={false}
              chartConfig={{
                backgroundColor: '#3F51B5',
                backgroundGradientFrom: '#3F51B5',
                backgroundGradientTo: '#3F51B5',
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#fcfdff',
                },
              }}
              bezier
              style={{
                borderRadius: 16,
                alignSelf: 'center',
              }}
            />
          ) : (
            <Text style={styles.txtNoProgress}>No Available Progress</Text>
          )}
        </View>

        <View style={styles.scoreTable}>
          <Text style={styles.txtScor}>Scores:</Text>
          <Text style={styles.txtavg}>
            Average:{' '}
            {parseFloat(
              scoresArray.reduce((a, b) => a + b, 0) / scoresArray.length
            ).toFixed(2)}{' '}
            Highest: {Math.max(...scoresArray)} Lowest:{' '}
            {Math.min(...scoresArray)}
          </Text>
        </View>

        <Text style={styles.txtProgress}>View Progress From:</Text>

        <ScrollView style={styles.scrollContainer}>
          {quizData.map((quiz) => (
            <TouchableOpacity
              key={quiz.id}
              style={[
                styles.btnQuiz,
                quiz.id === selectedQuiz.id && styles.selectedQuiz,
              ]}
              onPress={() => setSelectedQuiz(quiz)}
            >
              <Text
                style={[
                  styles.quizText,
                  quiz.id === selectedQuiz.id && styles.selectedTxt,
                ]}
              >
                {quiz.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default ProgressPage;
