import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
  },
  containerTo: {
    flex: 1,
  },
  resultaterText: {
    fontSize: 32,
    fontFamily: "PoppinsBold",
    position: "absolute",
    top: 24,
    left: 32,
  },
  btnBackToHome: {
    width: 50,
    height: 50,
    borderRadius: 10,
    position: "relative",
    top: 40,
    right: '7%',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  knapptext: {
    fontSize: 32,
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
  },
  title: {
    position: "absolute",
    alignSelf: 'center',
    width: '85%',
    top: 40,
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
  },

});
