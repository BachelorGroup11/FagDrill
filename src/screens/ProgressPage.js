import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/ProgressStyle";
import { LineChart } from "react-native-chart-kit";
import { fetchScore } from "../utilities/fetchScore";
import { fetchDate } from "../utilities/fetchDate";
import { LoadingAnimation } from "../components/Index";
import { db } from "../../firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

const quizCollection = collection(db, "quizzes");

const ProgressPage = ({ navigation }) => {
  const [scoresArray, setScoresArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [quizData, setQuizData] = useState([]);

  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Fetch quiz data from Firestore and store it in the state
  useEffect(() => {
    const fetchQuizzes = async () => {
      const quizzesSnapshot = await getDocs(quizCollection);
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

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.btnQuiz,
          item.id === selectedQuiz.id && styles.selectedQuiz,
        ]}
        onPress={() => setSelectedQuiz(item)}
      >
        <Text style={styles.quizText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Progress</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnBackToHome}
          onPress={() => navigation.replace("userpage")}
        >
          <Text style={styles.knapptext}>X</Text>
        </TouchableOpacity>
        <Text style={styles.txtProgress}>View Progress Form:</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            }}
            width={350}
            height={220}
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#3F51B5",
              backgroundGradientFrom: "#3F51B5",
              backgroundGradientTo: "#3F51B5",
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#fcfdff",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        ) : (
          <Text style={styles.txtNoProgress}>No Available Progress</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
export default ProgressPage;
