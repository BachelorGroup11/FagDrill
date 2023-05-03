import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: '#3F51B5',
    alignSelf: 'center',
    height: 127,
    width: '85%',
    borderRadius: 10,
    margin: 5,
  },
  shereBtn: {
    backgroundColor: '#5E73E8',
    justifyContent: 'center',
    borderRadius: 10,
    width: 50,
    height: 50,
    position: 'absolute',
    alignItems: 'center',
    bottom: 5,
    right: 5,
  },
  shereTxt: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  quizName: {
    color: '#ffffff',
    fontFamily: 'PoppinsBold',
    fontSize: 27,
    position: 'absolute',
    left: 10,
    top: 5,
  },
  attemptNum: {
    color: '#ffffff',
    fontFamily: 'PoppinsBold',
    fontSize: 15,
    position: 'absolute',
    top: 60,
    left: 10,
  },
  correctNum: {
    color: '#ffffff',
    fontFamily: 'PoppinsBold',
    fontSize: 20,
    left: 20,
    position: 'absolute',
    top: 80,
  },
  date: {
    color: '#ffffff',
    fontFamily: 'PoppinsBold',
    textAlign: 'center',
    fontSize: 14,
    left: -15,
    top: 85,
  },

  greenBorder: {
    borderWidth: 4,
    borderColor: '#00FF00',
    borderRadius: 10,
  },

  yellowBorder: {
    borderWidth: 4,
    borderColor: '#FFFF00',
    borderRadius: 10,
  },

  redBorder: {
    borderWidth: 4,
    borderColor: '#FF0000',
    borderRadius: 10,
  },
});
