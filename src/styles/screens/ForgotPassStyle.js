import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    alignself: "center",
    textAlign:"center",
    marginTop: 20,
    fontSize: 32,
    fontWeight: "bold",
  },

  TextInputEmail: {
    backgroundColor: "#C0C0C0",
    alignSelf: "center",
    height: 40,
    borderRadius: 10,
    width: 250,
  },

  TextInputPassword: {
    backgroundColor: "#C0C0C0",
    alignSelf: "center",
    height: 40,
    borderRadius: 10,
    width: 250,
  },

  inputViewEmail: {
    border: "1px solid",
    alignSelf: "center",
    marginTop: "25%",
    //backgroundColor: "#3F51B5",
    width: 250,
  },
  emailtxt: {
    alignSelf: "flex-start",
    marginVertical: 5
  },
  inputViewPassword: {
    border: "1px solid",
    alignSelf: "center",
    //backgroundColor: "#3F51B5",
    width: 250,
  },
  passwordtxt: {
    alignSelf: "flex-start",
    marginVertical: 5
  },

  loginBtn: {
    alignSelf: "center",
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    width: 100,
    fontWeight: "underline",
    fontSize: 15,
  },

  signupBtn: {
    backgroundColor: "#3F51B5",
    alignSelf: "center",
    justifyContent: 'center',
    marginTop: "20%",
    height: 40,
    borderRadius: 10,
    width: 250,
  },
  forgotPass: {
    alignSelf: "center",
    height: 40,
    borderRadius: 10,
    width: 160,
    fontWeight: "underline",
    fontSize: 15,
    marginVertical: 35
  },
  loginText: {
    color: "#2e216f",
    textAlign: "center",
    fontWeight: "underline",
    fontSize: 18,
  },
  signupText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  forgotText: {
    color: "#039BE5",
    textAlign: "center",
    fontWeight: "underline",
    fontSize: 18,
  },
  orText: {
    color: "#00bfff",
    alignSelf: "center",
    marginVertical:2,
  },
  altaLogo: {
    alignSelf: "center",
    paddingTop: 20,
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  }
});
