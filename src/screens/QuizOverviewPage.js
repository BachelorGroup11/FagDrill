import { useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from '../styles/screens/QuizOverviewStyle';
import {
  GoBack,
  LoadingAnimation,
  CompletedModal,
  AverageModal,
  HighestModal,
} from '../components/Index';
import * as Progress from 'react-native-progress';
import { LineChart } from 'react-native-chart-kit';
import {
  fetchNumOfCompletedQuizzes,
  fetchHighestScore,
  fetchAverageScore,
  fetchProgress,
  fetchUsersAverage,
  fetchUsersHighest,
} from '../utilities/Index';

const QuizOverviewPage = ({ route }) => {
  const [percentageCompleted, setPercentageCompleted] = useState(0);
  const [completedUsers, setCompletedUsers] = useState([]);

  const [recentProgress, setRecentProgress] = useState([]);

  const [highestScore, setHighestScore] = useState({
    score: 0,
    totalQuestions: 0,
    username: '',
  });
  const [highestScoresArray, setHighestScoresArray] = useState([]);

  const [averageScore, setAverageScore] = useState({ average: 0, total: 0 });
  const [averageScoresArray, setAverageScoresArray] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [completedModalVisible, setCompletedModalVisible] = useState(false);
  const [averageModalVisible, setAverageModalVisible] = useState(false);
  const [highestModalVisible, setHighestModalVisible] = useState(false);

  useEffect(() => {
    fetchNumOfCompletedQuizzes(
      route,
      setPercentageCompleted,
      setCompletedUsers
    );
    fetchHighestScore(route, setHighestScore);
    fetchProgress(route, setRecentProgress);
    fetchAverageScore(route, setAverageScore).then(() => setIsLoading(false));

    fetchUsersAverage(route, setAverageScoresArray);
    fetchUsersHighest(route, setHighestScoresArray);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <View style={styles.container}>
          <Text style={styles.header}>{route.params.name}</Text>
          <GoBack style={{ top: 30 }} />
          <CompletedModal
            isVisible={completedModalVisible}
            setIsVisible={setCompletedModalVisible}
            users={completedUsers}
          />
          <AverageModal
            isVisible={averageModalVisible}
            setIsVisible={setAverageModalVisible}
            users={averageScoresArray}
          />
          <HighestModal
            isVisible={highestModalVisible}
            setIsVisible={setHighestModalVisible}
            users={highestScoresArray}
          />
          <TouchableOpacity
            style={styles.piechartcontainer}
            onPress={() => setCompletedModalVisible(true)}
          >
            <Progress.Circle
              size={160}
              animated={true}
              progress={percentageCompleted}
              borderWidth={0}
              color={
                percentageCompleted >= 0.8
                  ? '#65D870'
                  : percentageCompleted >= 0.5
                  ? '#F0BA2D'
                  : '#FF0000'
              }
              unfilledColor="#FFFFFF"
              thickness={24}
              showsText={true}
              formatText={() =>
                `${Math.trunc(percentageCompleted * 100)}% of users completed`
              }
              textStyle={{
                fontFamily: 'PoppinsRegular',
                fontSize: 14,
                textAlign: 'center',
                color: '#D5D6D9',
              }}
            />
          </TouchableOpacity>
          <View style={styles.linechartcontainer}>
            {recentProgress.length > 0 && (
              <LineChart
                data={{
                  datasets: [
                    {
                      data: recentProgress,
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      strokeWidth: 4,
                    },
                  ],
                  legend: ['Recent Scores'],
                }}
                width={screenWidth * 1}
                height={screenHeight * 0.21}
                chartConfig={chartConfig}
                withInnerLines={false}
                style={{ right: 20, top: 5 }}
                bezier
              />
            )}
          </View>
          <View style={styles.averageandhighestcontainer}>
            <TouchableOpacity
              style={styles.averagecontainer}
              onPress={() => setAverageModalVisible(true)}
            >
              <Text style={styles.averagetext}>Average</Text>
              <Text
                style={[
                  styles.percentagetext,
                  averageScore.average >= 0.75
                    ? { color: '#65D870' }
                    : averageScore.average >= 0.5
                    ? { color: '#F0BA2D' }
                    : { color: '#FF0000' },
                ]}
              >
                {Math.trunc(averageScore.average * 100)}%
              </Text>
              <Text style={styles.basedontext}>
                Based on{`\n`}
                {averageScore.total} results
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.highestcontainer}
              onPress={() => setHighestModalVisible(true)}
            >
              <Text style={styles.averagetext}>Highest</Text>
              <Text
                style={[
                  styles.percentagetext,
                  highestScore.score / highestScore.totalQuestions >= 0.8
                    ? { color: '#65D870' }
                    : highestScore.score / highestScore.totalQuestions >= 0.5
                    ? { color: '#F0BA2D' }
                    : { color: '#FF0000' },
                ]}
              >
                {highestScore.score}/{highestScore.totalQuestions}
              </Text>
              <Text style={[styles.basedontext, { marginTop: '20%' }]}>
                {highestScore.username}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  fillShadowGradientTo: '#3F51B5',
  fillShadowGradientFrom: '#FFFFFF',
  fillShadowGradientFromOpacity: 0.8,
  fillShadowGradientToOpacity: 0.3,
};

export default QuizOverviewPage;
