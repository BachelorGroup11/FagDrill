import { styles } from '../styles/components/GoToQuizStyle';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';

// Component for buttons on homepage redirecting to a specified quiz
export const GoToQuiz = ({
  nav,
  name,
  quiz,
  duration,
  category,
  totalQuestions,
}) => {
  return (
    <TouchableOpacity
      style={styles.knappBytteS}
      onPress={() =>
        nav.navigate('infopage', {
          name: name,
          quiz: quiz,
          duration: duration,
          category: category,
          totalQuestions: totalQuestions,
        })
      }
    >
      <ImageBackground
        source={require('../assets/images/QuizBtn.png')}
        style={styles.imgButton}
      >
        <Text style={styles.knapptext}>Øving til {name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
