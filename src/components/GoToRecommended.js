import { styles } from '../styles/components/GoToRecommendedStyle';
import { Text, TouchableOpacity } from 'react-native';

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
        Practice for{`\n`}
        {name}
      </Text>
    </TouchableOpacity>
  );
};
