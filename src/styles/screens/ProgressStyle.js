import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer:{
    flex:1,
    bottom: -80
  },
  scoreTable:{
    flex:1,
    width:350,
    backgroundColor: "#3F51B5",
    position: "absolute",
    bottom: 365,
    borderRadius: 16,
    alignSelf: "center",
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
    left: 13,
    top: 150,
  },
  txtScor: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  txtProgress: {
    height: 41,
    width: 330,
    fontSize: 32,
    position: "absolute",
    bottom: 300,
    left: 37,
    fontWeight: "bold",
    marginBottom: 16,
  },
  txtavg: {
    top:0,
    height: 30,
    fontSize: 17,
    marginLeft:5,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  btnQuiz: {
    height: 50,
    width: 314,
    top: 0,
    marginTop: 8,
    left: 32,
    borderRadius: 16,
    backgroundColor: "#D9D9D9",
    justifyContent: 'center',
  },

  selectedQuiz: {
    backgroundColor: "#3F51B5",
    borderWidth: 1,
    borderColor: "black",
  },

  selectedTxt: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    alignItems: "center",
    left: 20,
  },

  quizText: {
    fontSize: 27,
    fontWeight: "bold",
    alignItems: "center",
    left: 20,
  },

  txtNoProgress: {
    height: 41,
    width: 330,
    fontSize: 32,
    position: "absolute",
    bottom: -140,
    left: 13,
    fontWeight: "bold",
  },
});
