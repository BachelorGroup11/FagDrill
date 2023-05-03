import { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/HomeStyle';
import { getAuth } from 'firebase/auth';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import storage from '@react-native-async-storage/async-storage';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  LoadingAnimation,
  GoToRecommended,
  GoToQuiz,
} from '../components/Index';
import { fetchLowestResults } from '../utilities/fetchLowestResults';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const HomePage = ({ navigation }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [recommendedQuizzes, setRecommendedQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    setQuizzes([]);

    const fetchQuizzes = async () => {
      const quizQuery = query(
        collection(db, 'quizzes'),
        where('users', 'array-contains', user.uid)
      );

      const querySnapshot = await getDocs(quizQuery);
      querySnapshot.forEach((doc) => {
        setQuizzes((prevArray) => [
          ...prevArray,
          {
            id: doc.id,
            name: doc.data().name,
            duration: doc.data().duration,
            category: doc.data().category,
            totalQuestions: doc.data().questions.length,
          },
        ]);
      });
    };
    fetchQuizzes().then(() => setIsLoading(false));

    const getPermission = async () => {
      if (Constants.isDevice) {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Enable push notifications to use the app!');
          await storage.setItem('expopushtoken', '');
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        await storage.setItem('expopushtoken', token);
      } else {
        alert('Must use physical device for Push Notifications');
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    };
    getPermission();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {});

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Have you played today?',
      data: { data: 'data goes here' },
    },
    trigger: {
      hour: 21,
      minute: 0,
      repeats: true,
    },
  });

  const fetchQuizzesOnRefresh = async () => {
    setQuizzes([]);
    const quizQuery = query(
      collection(db, 'quizzes'),
      where('users', 'array-contains', user.uid)
    );

    const querySnapshot = await getDocs(quizQuery);
    querySnapshot.forEach((doc) => {
      setQuizzes((prevArray) => [
        ...prevArray,
        {
          id: doc.id,
          name: doc.data().name,
          duration: doc.data().duration,
          category: doc.data().category,
          totalQuestions: doc.data().questions.length,
        },
      ]);
    });
  };

  useEffect(() => {
    setRecommendedQuizzes([]);
    fetchLowestResults(quizzes, setRecommendedQuizzes);
  }, [isLoading]);

  return (
    <View style={{ flex: 1 }}>
      {recommendedQuizzes.length === 0 ? (
        <LoadingAnimation />
      ) : (
        <ImageBackground
          source={require('../assets/images/home_page_bg.png')}
          style={{ flex: 1, width: null, alignSelf: 'stretch' }}
        >
          <SafeAreaView style={styles.containerTo}>
            <Text style={styles.letsplay}>Let's play</Text>
            <View style={styles.btnView}>
              <TouchableOpacity
                style={styles.imgBtn_profile}
                onPress={() => navigation.navigate('userpage')}
              >
                <ImageBackground
                  source={require('../assets/images/Propile_btn_bg.png')}
                  style={styles.imgButton}
                ></ImageBackground>
              </TouchableOpacity>
            </View>

            <Text style={styles.recommendedtext}>Recommended for you</Text>
            <TouchableOpacity
              style={styles.infoicon}
              onPress={() =>
                alert(
                  'Your recommended quizzes are based on your previous results.'
                )
              }
            >
              <FontAwesome name="info" size={20} color={'#000000'} />
            </TouchableOpacity>

            <ScrollView horizontal style={styles.recommendedview}>
              {recommendedQuizzes.map(
                (value, index) =>
                  value !== undefined && (
                    <GoToRecommended
                      nav={navigation}
                      name={value.name}
                      quiz={value.id}
                      duration={value.duration}
                      category={value.category}
                      totalQuestions={value.totalQuestions}
                      key={index}
                    />
                  )
              )}
            </ScrollView>

            <Text style={styles.allquizzes}>All quizzes</Text>
            <TouchableOpacity
              style={styles.refreshBtn}
              onPress={() => fetchQuizzesOnRefresh()}
            >
              <ImageBackground
                source={require('../assets/images/Refresh.png')}
                style={styles.imgButton}
              ></ImageBackground>
            </TouchableOpacity>

            <ScrollView style={styles.container}>
              {quizzes.map((value, index) => (
                <GoToQuiz
                  nav={navigation}
                  name={value.name}
                  quiz={value.id}
                  duration={value.duration}
                  category={value.category}
                  totalQuestions={value.totalQuestions}
                  key={index}
                />
              ))}
              <TouchableOpacity
                style={styles.resultBtn}
                onPress={() => navigation.navigate('resultspage')}
              >
                <Text style={styles.resultTxt}>Results</Text>
              </TouchableOpacity>
            </ScrollView>
          </SafeAreaView>
          <StatusBar translucent backgroundColor="transparent" />
        </ImageBackground>
      )}
    </View>
  );
};

export default HomePage;
