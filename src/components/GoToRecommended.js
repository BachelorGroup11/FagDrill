import { styles } from '../styles/components/GoToRecommendedStyle';
import { Text, TouchableOpacity } from 'react-native';

// Component for buttons on homepage redirecting to a specified quiz
export const GoToRecommended = ({
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
      <Text style={styles.knapptext}>
        Øving til{`\n`}
        {name}
      </Text>
    </TouchableOpacity>
  );
};
