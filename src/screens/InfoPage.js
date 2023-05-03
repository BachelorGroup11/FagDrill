import { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/InfoStyle';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { GoBack, LoadingAnimation } from '../components/Index';
import { fetchQuizResults } from '../utilities/fetchQuizResults';

const InfoPage = ({ route, navigation }) => {
  // Contains data from the info field on a specified quiz in the database
  const [info, setInfo] = useState();
  // Contains data from the quiz results in the database
  const [quizResults, setQuizResults] = useState([]);
  const [isLoading, setisloading] = useState(true);

  // Get data from firestore collection quizzes with specified quiz from route parameter
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'quizzes', route.params.quiz);
      const docSnap = await getDoc(docRef);
      setInfo(docSnap.data().info);
    };

    fetchData().catch((error) => console.log(error));
  }, []);

  // Retrieve top three quiz results
  useEffect(() => {
    setQuizResults([]);
    fetchQuizResults(setQuizResults, route)
      .catch((error) => console.log(error))
      .then(() => setisloading(false));
  }, []);

  return (
    <View style={styles.containerTo}>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <ImageBackground
          source={require('../assets/images/Quizinfo_bg.png')}
          style={{ flex: 1, width: null, alignSelf: 'stretch' }}
        >
          <SafeAreaView style={styles.containerTo}>
            <GoBack />
            <View style={styles.textWrapper}>
              {route.params.category === 'social_quiz' && (
                <View style={styles.leaderboard}>
                  <Text style={styles.leaderboardtitle}>Top 3</Text>
                  {quizResults.map((result, index) => (
                    <View
                      style={[
                        styles.leaderboardentry,
                        index == 1
                          ? { backgroundColor: '#5E73E8' }
                          : index == 2
                          ? { backgroundColor: '#6BB5FF' }
                          : {},
                      ]}
                      key={index}
                    >
                      <Text style={styles.leaderboardtext}>{index + 1}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: 200,
                          justifyContent: 'space-between',
                        }}
                      >
                        <Text style={styles.leaderboardtext}>
                          {result.name}
                        </Text>
                        <Text style={styles.leaderboardScore}>
                          {result.score} / {route.params.totalQuestions}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}
              <Text style={styles.levelText}>
                {route.params.totalQuestions} Spørsmål
              </Text>
              <View style={{ position: 'absolute', width: 320, top: 460 }}>
                <Text style={styles.Infotext}>
                  Øving til {route.params.name}
                </Text>
                <Text style={[styles.descriptionText]}>{info}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() =>
                navigation.navigate('playpage', {
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
