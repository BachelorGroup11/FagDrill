import { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../styles/screens/QuizOverviewStyle';
import { GoBack, LoadingAnimation } from '../components/Index';
import * as Progress from 'react-native-progress';
import { LineChart } from 'react-native-chart-kit';
import {
  fetchNumOfCompletedQuizzes,
  fetchHighestScore,
  fetchAverageScore,
  fetchProgress,
} from '../utilities/Index';

const QuizOverviewPage = ({ route }) => {
  const [percentageCompleted, setPercentageCompleted] = useState(0);
  const [recentProgress, setRecentProgress] = useState([]);
  const [highestScore, setHighestScore] = useState({
    score: 0,
    totalQuestions: 0,
    username: '',
  });
  const [averageScore, setAverageScore] = useState({ average: 0, total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    fetchAverageScore(route, setAverageScore).then(() => setIsLoading(false));
    fetchHighestScore(route, setHighestScore);
    fetchProgress(route, setRecentProgress);
    fetchNumOfCompletedQuizzes(route, setPercentageCompleted);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <View style={styles.container}>
          <Text style={styles.header}>{route.params.name}</Text>
          <GoBack style={{ top: 30 }} />
          <View style={styles.piechartcontainer}>
            <Progress.Circle
              size={160}
              animated={true}
              progress={percentageCompleted}
              color="#65D870"
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
          </View>
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
            <View style={styles.averagecontainer}>
              <Text style={styles.averagetext}>Average</Text>
              <Text style={styles.percentagetext}>
                {Math.trunc(averageScore.average * 100)}%
              </Text>
              <Text style={styles.basedontext}>
                Based on{`\n`}
                {averageScore.total} results
              </Text>
            </View>
            <View style={styles.highestcontainer}>
              <Text style={styles.averagetext}>Highest</Text>
              <Text style={[styles.percentagetext, { color: '#65D870' }]}>
                {highestScore.score}/{highestScore.totalQuestions}
              </Text>
              <Text style={[styles.basedontext, { marginTop: '20%' }]}>
                {highestScore.username}
              </Text>
            </View>
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
