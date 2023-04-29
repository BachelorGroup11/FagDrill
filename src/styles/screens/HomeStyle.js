import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
  },
  containerTo: {
    flex: 1,
  },
  containerthre: {
    //backgroundColor: "#000000",
    flex: 1,
    marginTop: "40%",
    marginBottom: "5%",
    justifyContent: "center",
  },
  btnView: {
    //backgroundColor: "#000000",
    position: "absolute",
    width: "80%",
    top: "4%",
    alignSelf: "center"
  },
  letsplay: {
    //backgroundColor: "#000000",
    position: "absolute",
    left: "10%",
    top: "15%",
    width: "80%",
    height: 42,
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
  },
  imgButton: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    height: "100%",
    justifyContent: "center",
    overflow: "hidden",
  },
  imgBtn_profile: {
    //backgroundColor: "#3F51B5",
    alignSelf: "flex-end",
    width: 50,
    height: 50,
    borderRadius: 22,
  },
  refreshBtn: {
    alignSelf: "flex-end",
    width: 50,
    height: 50,
    borderRadius: 22,
    marginTop: 5,
  },
  loginBtn: {
    backgroundColor: "#2e216f",
    alignSelf: "center",
    position: "relative",
    height: 40,
    borderRadius: 10,
    width: 250,
    margin: 10,
  },
  resultBtn: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#3F51B5",
    borderRadius: 22,
    width: 314,
    height: 60,
    marginBottom: 50,
  },
  resultTxt: {
    color: "white",
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});
