import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  scrollContainer:{
    flex:1,
    width: "75%",
    alignSelf: "center"
  },
  scoreTable:{
    width: "90%",
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    borderRadius: 16,
    alignSelf: "center",
    marginVertical: 15,
    top: "2%"
  },
  btnBackToHome: {
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    position: "absolute",
    right: "5%",
    top: "10%",
    fontSize: 32,
  },
  knapptext: {
    fontSize: 32,
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
  },

  title: {
    position: "absolute",
    left: "5%",
    top: "10%",
    width: "90%",
    fontSize: 32,
    fontWeight: "bold",
  },

  chart: {
    alignSelf: "center",
    //backgroundColor: "#C0C0C0",
    position: "absolute",
    width: "90%",
    top: "20%",
    justifyContent: "center"
  },
  txtScor: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  txtProgress: {
    //backgroundColor: "#C0C0C0",
    width: "90%",
    fontSize: 32,
    alignSelf: "center",
    fontWeight: "bold",
    textAlign: "center",
    
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
    width: "100%",
    marginTop: 8,
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
