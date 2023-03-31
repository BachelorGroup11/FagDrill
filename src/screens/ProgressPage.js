import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/ProgressStyle";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { fetchScore } from "../utilities/fetchScore";
import { fetchDate } from "../utilities/fetchDate";

const screenWidth = Dimensions.get("window").width;

const ProgressPage = ({ navigation }) => {
  const [scoresArray, setScoresArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [quizData, setQuizData] = useState([]);

  const quizzes = [
    { id: "dFPZQ3bseEkoPMqlrzz7", name: "Quiz 1" },
    { id: "ad8usDZM4b5GWrpoV6nb", name: "Quiz 2" },
    // Add more quizzes as needed
  ];

  const [selectedQuiz, setSelectedQuiz] = useState(quizzes[0]);

  useEffect(() => {
    fetchScore(setScoresArray, selectedQuiz.id);
    fetchDate(setDateArray, selectedQuiz.id);
  }, [selectedQuiz]);

  useEffect(() => {
    setQuizData(quizzes.map((quiz) => quiz.name));
  }, []);

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
          onPress={() => navigation.navigate("userpage")}
        >
          <Text style={styles.knapptext}>X</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {quizzes.map((quiz) => (
          <TouchableOpacity
            key={quiz.id}
            style={[
              styles.btnQuiz,
              quiz.id === selectedQuiz.id && styles.selectedQuiz,
            ]}
            onPress={() => setSelectedQuiz(quiz)}
          >
            <Text style={styles.quizText}>{quiz.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.chart}>
        {scoresArray.length > 0 ? (
          <LineChart
            data={{
              labels: dateArray,
              datasets: [
                {
                  data: scoresArray,
                },
              ],
            }}
            width={screenWidth}
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#3F51B5",
              backgroundGradientFrom: "#3F51B5",
              backgroundGradientTo: "#3F51B5",
              decimalPlaces: 2,
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
          <Text>No data available</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProgressPage;
