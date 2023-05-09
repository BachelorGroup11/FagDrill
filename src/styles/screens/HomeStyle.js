import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerTo: {
    flex: 1,
  },
  container: {
    
    position: "absolute",
    top: '50%',
    height: "55%",
    width: "90%",
    alignSelf: "center",
  },
  btnView: {
    position: 'absolute',
    width: '80%',
    top: '14%',
    alignSelf: 'center',
  },
  letsplay: {
    position: 'absolute',
    left: '10%',
    top: '12%',
    width: '80%',
    fontSize: 32,
    fontFamily: 'PoppinsBold',
    color: '#000000',
  },
  recommendedtext: {
    
    position: 'absolute',
    fontFamily: 'PoppinsSemiBold',
    left: '10%',
    top: '25%',
    fontSize: 16,
    color: '#000000',
  },
  recommendedview: {
    
    top: '30%',
    position: 'absolute',
    alignSelf: "center",
    width: "80%",
  },
  allquizzes: {
    
    position: 'absolute',
    fontFamily: 'PoppinsSemiBold',
    left: '10%',
    top: '45%',
    fontSize: 16,
    color: '#000000',
  },
  imgButton: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
    height: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imgBtn_profile: {
    left: '90%',
    bottom: '30%',
    width: 40,
    height: 40,
    borderRadius: 22,
  },
  refreshBtn: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: '10%',
    top: '45%',
  },
  infoicon: {
    
    position: 'absolute',
    justifyContent: 'center',
    left: '85%',
    top: '25%',
    width: 40,
  },
  loginBtn: {
    backgroundColor: '#2e216f',
    alignSelf: 'center',
    position: 'relative',
    height: 40,
    borderRadius: 10,
    width: 250,
    margin: 10,
  },
  resultBtn: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: 22,
    width: 314,
    height: 60,
    marginBottom: 50,
  },
  resultTxt: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  recommendedquiz: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    position: 'absolute',
    borderRadius: 10,
    top: '30%',
    left: '12%',
    width: "30%",
    height: 77,
  },
});
