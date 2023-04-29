import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE"
  },

  btnBackToHome: {
    //backgroundColor: "#C0C0C0",
    justifyContent: "center",
    width: 60,
    height: 60,
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
  line:{
    color: "black", 
    alignSelf: "center",
    position: "absolute",
    top: "18%",
  },
  title: {
    //backgroundColor: "#C0C0C0",
    position: "absolute",
    left: "5%",
    top: "10%",
    width: "90%",
    fontSize: 32,
    fontWeight: "bold",
  },
});
