import { Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/ProgressStyle';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { fetchScore } from '../utilities/fetchScore';

const screenWidth = Dimensions.get('window').width;

const ProgressPage = ({ navigation }) => {
	// Gjør det på en annen måte så vi slipper å ha hardcoded default value, se link under for forklaring
	// https://github.com/indiespirit/react-native-chart-kit/issues/237#issuecomment-741866484
	const [scoresArray, setScoresArray] = useState([0, 0, 0, 0, 0, 0]);

	useEffect(() => {
		fetchScore(setScoresArray);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Progress</Text>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.btnBackToHome}
					onPress={() => navigation.navigate('userpage')}
				>
					<Text style={styles.knapptext}>X</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.chart}>
				<LineChart
					data={{
						labels: [
							'Trial 1',
							'Trial 2',
							'Trial 3',
							'Trial 4',
							'Trial 5',
							'Trial 6',
						],
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
						backgroundColor: '#3F51B5',
						backgroundGradientFrom: '#3F51B5',
						backgroundGradientTo: '#3F51B5',
						decimalPlaces: 2,
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
						marginVertical: 8,
						borderRadius: 16,
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

export default ProgressPage;
