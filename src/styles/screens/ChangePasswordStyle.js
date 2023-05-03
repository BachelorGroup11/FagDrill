import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  btnBackToHome: {
    //backgroundColor: "#C0C0C0",
    width: 42,
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "flex-end"
  },
  backbtnView:{
    //backgroundColor: "#3F51B5",
    width: "80%",
    alignSelf: "center",
    position: "absolute",
    top: "20%",
  },
  knapptext: {
    fontSize: 32,
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
  },

  title: {
    //backgroundColor: "#C0C0C0",
    position: "absolute",
    left: "10%",
    top: "15%",
    width: "80%",
    fontSize: 32,
    fontWeight: "bold",
  },

  TextInputEmail: {
    backgroundColor: "#C0C0C0",
    alignSelf: "center",
    height: 40,
    borderRadius: 10,
    width: 250,
    marginTop: 1,
  },

  TextInputPassword: {
    backgroundColor: "#C0C0C0",
    alignSelf: "center",
    height: 40,
    borderRadius: 10,
    width: 250,
    marginTop: 1,
  },

  inputViewEmail: {
    //backgroundColor: "#3F51B5",
    border: "1px solid",
    alignSelf: "center",
    marginTop: "80%",
    width: 250,
    marginBottom: 20,
  },

  inputViewPassword: {
    //backgroundColor: "#3F51B5",
    border: "1px solid",
    alignSelf: "center",
    width: 250,
    marginTop: 10,
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
    alignSelf: "center",
    width: "80%",
    height: 60,
    position: "absolute",
    bottom: 50,
  },

  YourAccountText2: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    bottom: -5,
    fontSize: 25,
  },
});
