import { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../styles/screens/QuizOverviewStyle';
import { GoBack } from '../components/GoBack';
import * as Progress from 'react-native-progress';
import { LineChart } from 'react-native-chart-kit';

const QuizOverviewPage = ({ route }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    console.log(route.params.users);
  });

  // Todo: How many has answered the quiz?
  // Check whether user id exists in any result document

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz 1</Text>
      <GoBack style={{ top: 30 }} />
      <View style={styles.piechartcontainer}>
        <Progress.Circle
          size={160}
          animated={true}
          progress={0.7}
          color="#65D870"
          unfilledColor="#FFFFFF"
          thickness={24}
          showsText={true}
          formatText={() => `70%\nCompleted`}
          textStyle={{
            fontFamily: 'PoppinsRegular',
            fontSize: 16,
            textAlign: 'center',
            color: '#D5D6D9',
          }}
        />
      </View>
      <View style={styles.linechartcontainer}>
        <Text style={styles.progresstext}>Progress</Text>
        <LineChart
          data={data}
          width={screenWidth * 0.9}
          height={screenHeight * 0.21}
          chartConfig={chartConfig}
          //withDots={false}
          withInnerLines={false}
          //withOuterLines={false}
          //withHorizontalLabels={false}
          style={{ right: 10, top: 0 }}
          bezier
        />
      </View>
      <View style={styles.averageandhighestcontainer}>
        <View style={styles.averagecontainer}>
          <Text style={styles.averagetext}>Average</Text>
          <Text style={styles.percentagetext}>75%</Text>
          <Text style={styles.basedontext}>Based on{`\n`}10 results</Text>
        </View>
        <View style={styles.highestcontainer}>
          <Text style={styles.averagetext}>Highest</Text>
          <Text style={[styles.percentagetext, { color: '#65D870' }]}>
            9/10
          </Text>
          <Text style={[styles.basedontext, { marginTop: '20%' }]}>
            Username
          </Text>
        </View>
      </View>
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

const data = {
  //labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [4, 3, 5, 8, 5, 6, 4, 8, 5, 10],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
      strokeWidth: 4,
    },
  ],
};

export default QuizOverviewPage;
