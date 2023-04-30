import { styles } from "../styles/components/ResultStyle";
import { Text, TouchableOpacity, View, Share } from "react-native";

// Render a specific result
export const Result = ({ name, attempt, score, total, date }) => {
  const onShare = async (name,score,total) => {
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
        <Text style={styles.attemptNum}>Forsøk: {attempt}</Text>
        <Text style={styles.correctNum}>
          {score}/{total}
        </Text>
        <Text style={styles.date}>{date.toDateString()}</Text>
        <TouchableOpacity
        style = {styles.shereBtn}
        onPress={() => onShare(name,score,total)}
        >
          <Text style={styles.shereTxt}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
