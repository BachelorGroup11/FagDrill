import { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/InfoStyle";
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { GoBack, LoadingAnimation } from "../components/Index";

const InfoPage = ({ route, navigation }) => {
  // Contains data from the info field on a specified quiz in the database
  const [info, setInfo] = useState();
  // Contains data from the quiz results in the database
  const [quizResults, setQuizResults] = useState([]);

  // Update info state with information on specified quiz
  useEffect(() => {
    const fetchData = async () => {
      // Get data from firestore collection quizzes with specified quiz from route parameter
      const docRef = doc(db, "quizzes", route.params.quiz);
      const docSnap = await getDoc(docRef);
      // If query is successful, update info state, otherwise log an error
      docSnap.exists()
        ? setInfo(docSnap.data().info)
        : console.log("No such document");
    };

    fetchData().catch((error) => console.log(error));
  }, []);

  // Retrieve quiz results and update quizResults state
  useEffect(() => {
    const fetchQuizResults = async () => {
      const quizResultsRef = collection(db, "quiz_results");
      const q = query(
        quizResultsRef,
        orderBy("score", "desc"), // sort quiz results in descending order based on score
        limit(3), // only retrieve top 3 quiz results
        where("category", "==", "social_quiz"), // filter quiz results by category
        where("quiz_id", "==", route.params.quiz) // filter quiz results by quiz ID
      );
      const querySnapshot = await getDocs(q);
      const quizResultsData = [];
      querySnapshot.forEach((doc) => {
        quizResultsData.push({ id: doc.id, ...doc.data() });
      });
      setQuizResults(quizResultsData);
    };

    fetchQuizResults().catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.containerTo}>
      {!info ? (
        <LoadingAnimation />
      ) : (
        <ImageBackground
          source={require("../assets/images/Quizinfo_bg.png")}
          style={{ flex: 1, width: null, alignSelf: "stretch" }}
        >
          <SafeAreaView style={styles.containerTo}>
            <GoBack />
            <View style={styles.textWrapper}>
              <Text style={styles.levelText}>Level X</Text>
              <Text style={styles.Infotext}>Øving til {route.params.name}</Text>
              <Text style={styles.descriptionText}>{info}</Text>
              <View style={styles.leaderboard}>
                <Text style={styles.leaderboardTitle}>Top 3 Users</Text>
                {quizResults.map((result, index) => (
                  <View key={result.id} style={styles.leaderboardItem}>
                    <Text style={styles.leaderboardItemText}>
                      {index + 1}. {result.username}
                    </Text>
                    <Text style={styles.leaderboardItemText}>
                      {result.score}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() =>
                navigation.navigate("playpage", {
                  name: route.params.name,
                  quiz: route.params.quiz,
                  duration: route.params.duration,
                })
              }
            >
              <Text style={styles.btnText}>START</Text>
            </TouchableOpacity>
          </SafeAreaView>
          <StatusBar translucent backgroundColor="transparent" />
        </ImageBackground>
      )}
    </View>
  );
};

export default InfoPage;
