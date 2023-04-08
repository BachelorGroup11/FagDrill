import { useState, useEffect } from "react";
import { View, ScrollView, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/ResultsStyle";
import { GoBack, Result, LoadingAnimation } from "../components/Index";
import { fetchResults } from "../utilities/fetchResults";

const ResultsPage = ({ navigation }) => {
  const [resultsArray, setResultsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all result documents linked to the specific user from firebase
  useEffect(() => {
    fetchResults(setResultsArray).then(() => setIsLoading(false));
  }, []);

  return (
    <View style={styles.containerTo}>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <SafeAreaView style={styles.containerTo}>
          <ScrollView style={styles.container}>
            <View>
              <Text style={styles.resultaterText}>Resultater</Text>
              <GoBack nav={navigation} destination={"homepage"} />
            </View>
            {resultsArray
              .sort((a, b) => b.date - a.date)
              .map((result, idx) => (
                <Result
                  name={result.name}
                  attempt={result.attempt}
                  score={result.score}
                  total={result.totalQuestions}
                  date={result.date}
                  key={idx}
                />
              ))}
          </ScrollView>
          <StatusBar translucent backgroundColor="transparent" />
        </SafeAreaView>
      )}
    </View>
  );
};

export default ResultsPage;
