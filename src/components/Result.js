import { useEffect, useState } from 'react';
import { styles } from '../styles/components/ResultStyle';
import { Text, TouchableOpacity, View, Share } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';

// Render a specific result
export const Result = ({ name, attempt, score, total, date, quiz_id }) => {
  const [info, setInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'quizzes'));
      querySnapshot.forEach((doc) => {
        if (quiz_id === doc.id && doc.data().category === 'social_quiz') {
          setInfo(doc.id);
        }
      });
    };

    fetchData().catch((error) => console.log(error));
  }, []);

  const onShare = async (name, score, total) => {
    try {
      const result = await Share.share({
        title: 'My result.',
        message: `My last result on quiz: ${name}. With the score of: ${score}/${total}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <View
        style={[
          styles.rectangle,
          score / total >= 0.8
            ? styles.greenBorder
            : score / total >= 0.5
            ? styles.yellowBorder
            : score / total <= 0.5
            ? styles.redBorder
            : styles.rectangle,
        ]}
      >
        <Text style={styles.quizName}>{name}</Text>
        <Text style={styles.attemptNum}>Score:</Text>
        <Text style={styles.correctNum}>
          {score}/{total}
        </Text>
        <Text style={styles.date}>{date.toDateString()}</Text>
        {quiz_id === info && (
          <TouchableOpacity
            style={styles.shereBtn}
            onPress={() => onShare(name, score, total)}
          >
            <Ionicons name="share-social" size={30} color={'#FFFFFF'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
