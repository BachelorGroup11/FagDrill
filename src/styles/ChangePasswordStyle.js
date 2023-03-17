import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  btnBackToHome: {
    width: 42,
    height: 42,
    borderRadius: 30,
    position: "relative",
    left: 300,
    top: 40,
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
    right: 190,
    top: 90,
    fontSize: 32,
    fontWeight: "bold",
  },

  TextInputEmail: {
    backgroundColor: "#C0C0C0",
    alignSelf: "center",
    position: "absolute",
    bottom: 425,
    height: 40,
    borderRadius: 10,
    width: 250,
  },

  TextInputPassword: {
    backgroundColor: "#C0C0C0",
    alignSelf: "center",
    position: "absolute",
    bottom: 320,
    height: 40,
    borderRadius: 10,
    width: 250,
  },

  inputViewEmail: {
    border: "1px solid",
    alignItems: "center",
    position: "absolute",
    bottom: 470,
    right: 198,
  },

  inputViewPassword: {
    border: "1px solid",
    alignItems: "center",
    position: "absolute",
    bottom: 365,
    width: 190,
    right: 170,
  },

  loginBtn: {
    backgroundColor: "#3F51B5",
    alignSelf: "center",
    position: "absolute",
    bottom: 235,
    height: 40,
    borderRadius: 10,
    width: 250,
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "#3F51B5",
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 12,
    bottom: -600,
    width: 310,
    height: 60,
    right: -35,
  },

  YourAccountText2: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    bottom: -5,
    fontSize: 25,
  },
});
