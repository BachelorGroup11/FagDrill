import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    alignself: "center",
    textAlign: "center",
   
    fontSize: 32,
    fontWeight: "bold",
  },

  TextInputEmail: {
    backgroundColor: "#C0C0C0",
    alignSelf: "center",
    position: "absolute",
    bottom: 435,
    height: 40,
    borderRadius: 10,
    width: 250,
  },

  TextInputPassword: {
    backgroundColor: "#C0C0C0",
    alignSelf: "center",
    position: "absolute",
    bottom: 350,
    height: 40,
    borderRadius: 10,
    width: 250,
  },

  inputViewEmail: {
    border: "1px solid",
    alignItems: "center",
    position: "absolute",
    bottom: 480,
    right: 277,
  },

  inputViewPassword: {
    border: "1px solid",
    alignItems: "center",
    position: "absolute",
    bottom: 395,
    width: 190,
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

  signupBtn: {
    alignSelf: "center",
    position: "absolute",
    bottom: 180,
    height: 40,
    borderRadius: 10,
    width: 100,
    fontWeight: "underline",
    fontSize: 15,
  },
  forgotPass: {
    alignSelf: "center",
    position: "absolute",
    bottom: 130,
    height: 40,
    borderRadius: 10,
    width: 160,
    fontWeight: "underline",
    fontSize: 15,
  },

  loginText: {
    color: "white",
    alignself: "center",
    position: "absolute",
    right: 155,
    bottom: 12,
    right: 107,
    fontWeight: "bold",
  },

  orText: {
    color: "#00bfff",
    alignSelf: "center",
    position: "absolute",
    bottom: 95,
    height: 40,
  },
  altaLogo: {
    alignSelf: "center",
    paddingTop: 20,
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  }
});
