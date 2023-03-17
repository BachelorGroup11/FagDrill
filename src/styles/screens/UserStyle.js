import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    position: "absolute",
    width: 300,
    height: 40,
    left: 32,
    top: 90,
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
  },

  appButtonContainer1: {
    flex: 1,
    backgroundColor: "#3F51B5",
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 12,
    bottom: 450,
    width: 310,
    height: 60,
    right: 30,
    position: "absolute",
  },
  YourAccountText1: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    bottom: -5,
    fontSize: 25,
    flex: 0.8,
  },

  appButtonContainer3: {
    elevation: 8,
    backgroundColor: "#3F51B5",
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 12,
    bottom: 330,
    width: 310,
    height: 60,
    right: 30,
    position: "absolute",
  },

  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "#3F51B5",
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 12,
    bottom: 40,
    width: 310,
    height: 60,
    right: 30,
    position: "absolute",
  },

  YourAccountText2: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    bottom: -5,
    fontSize: 25,
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
});
