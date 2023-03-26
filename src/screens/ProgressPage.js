import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/ProgressStyle";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, query, getDocs, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const screenWidth = Dimensions.get("window").width;

const ProgressPage = ({ navigation }) => {

  const [isToggle, setIsToggle] = useState(false);
	const auth = getAuth();
	const user = auth.currentUser;
  // Finds ut if the current user is an admin, and set isToggle to tru if the user is admin.
  useEffect(() => {
		const fetchData = async () => {
			const userQuery = query(
				collection(db, 'users'),
				where('user_id', '==', user.uid)
			);

			const querySnapshot = await getDocs(userQuery);
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
				if (doc.data().is_admin == true) {
					setIsToggle(!isToggle)
					console.log(isToggle)
				}else{
					setIsToggle(isToggle)
					console.log(isToggle)
				}
			});
		};
		fetchData().catch((error) => console.log(error));
	}, []);

	const goToUserPages = () => {
		console.log(isToggle)
    //checkes if user is admin. using isToggle that we set earlier. And choses userpage or useradminPage
		if (isToggle === true){
			navigation.replace('Userpageadmin');
		}else if (isToggle === false) {
			navigation.replace('userpage');
		}
	};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Progress</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnBackToHome}
          onPress={() => goToUserPages()}
        >
          <Text style={styles.knapptext}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.chart}>
        <LineChart
          data={{
            labels: [
              "Trial 1",
              "Trial 2",
              "Trial 3",
              "Trial 4",
              "Trial 5",
              "Trial 6",
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#3F51B5",
            backgroundGradientFrom: "#3F51B5",
            backgroundGradientTo: "",
            decimalPlaces: 2, // optional, defaults to 2dp
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
      </View>
    </SafeAreaView>
  );
};

export default ProgressPage;
