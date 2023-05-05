import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  QuestionContainer: {
    width: 300,
    height: 80,
    top: 20,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#000000',
    backgroundColor: '#FFFFFF',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  QuestionText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  summary: {
    alignItems: 'center',
    top: 30,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#000000',
    backgroundColor: '#FFFFFF',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    height: 60,
    borderRadius: 10,
  },
  summaryText: {
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: '#3F51B5',
    borderWidth: 2,
    borderRadius: 10,
    top: 320,
    paddingLeft: 10,
    fontFamily: 'PoppinsBold',
  },
  sumbitBtn: {
    backgroundColor: '#3F51B5',
    alignSelf: 'center',
    position: 'absolute',
    top: 400,
    height: 50,
    borderRadius: 22,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'PoppinsSemiBold',
  },
  correctcontainer: {
    alignItems: 'center',
    top: 350,
  },
  feedback: {
    position: 'absolute',
    fontWeight: 'medium',
    fontFamily: 'PoppinsMedium',
    color: '#3F51B5',
    paddingHorizontal: 20,
    fontSize: 22,
    textAlign: 'center',
  },
  summarytext: {
    fontSize: 16,
    top: 80,
    fontFamily: 'PoppinsRegular',
  },
  btncontainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 340,
    top: 80,
    position: 'absolute',
  },
  btnchoice: {
    width: 150,
    height: 85,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
  },
});
