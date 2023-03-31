import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  btnBackToHome: {
    width: 50,
    height: 50,
    borderRadius: 30,
    position: "relative",
    left: 300,
    top: 40,
    fontSize: 32,
  },

  knapptext: {
    fontSize: 32,
    alignSelf: "center",
    color: "black",
    padding: 5,
    paddingLeft: 10,
    fontWeight: "bold",
  },

  title: {
    alignself: "center",
    position: "absolute",
    right: 230,
    top: 90,
    fontSize: 32,
    fontWeight: "bold",
  },

  chart: {
    alignself: "center",
    position: "absolute",
    top: 150,
  },

  scrollContainer: {},

  btnQuiz: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    bottom: -50,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: "#f2f2f2",
    color: "#f2f2f2",
  },

  selectedQuiz: {
    backgroundColor: "#3F51B5",
  },

  quizText: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
  },
});
