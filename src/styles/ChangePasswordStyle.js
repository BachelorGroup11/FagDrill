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
    fontSize: 32,
  },

  title: {
    alignself: "center",
    position: "absolute",
    right: 110,
    bottom: 539,
    fontSize: 20,
    fontWeight: "bold",
  },

  TextInputEmail: {
    backgroundColor: "#C0C0C0",
    alignSelf: "center",
    position: "absolute",
    bottom: 375,
    height: 40,
    borderRadius: 10,
    width: 250,
  },

  TextInputPassword: {
    backgroundColor: "#C0C0C0",
    alignSelf: "center",
    position: "absolute",
    bottom: 270,
    height: 40,
    borderRadius: 10,
    width: 250,
  },

  inputViewEmail: {
    border: "1px solid",
    alignItems: "center",
    position: "absolute",
    bottom: 420,
    right: 198,
  },

  inputViewPassword: {
    border: "1px solid",
    alignItems: "center",
    position: "absolute",
    bottom: 315,
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

    appButtonContainer2: {
      elevation: 8,
      backgroundColor: "#3F51B5",
      borderRadius: 22,
      paddingVertical: 10,
      paddingHorizontal: 12,
      bottom: -300,
      width: 310,
      height: 60,
      right: -35,
    },
  },
});
