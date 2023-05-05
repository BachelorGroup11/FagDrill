import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerTo: {
    flex: 1,
  },
  progressContainer: {
    //backgroundColor: "#C0C0C0",
    width: 330,
    height: 44,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#9A999917',
  },
  streak: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
  },
  IndexText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 14,
    paddingLeft: 5,
  },
  QuestionContainer: {
    width: 300,
    height: 120,
    top: 20,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    color: '#000000',
    backgroundColor: '#FFFFFF',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  QuestionText: {
    fontFamily: 'PoppinsMedium',
    fontSize: 14,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  resultsBtn: {
    backgroundColor: '#3F51B5',
    alignSelf: 'center',
    position: 'absolute',
    top: 520,
    height: 78,
    borderRadius: 22,
    width: 314,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 30,
    shadowRadius: 3,
  },
  nextBtn: {
    backgroundColor: '#3F51B5',
    alignSelf: 'center',
    position: 'absolute',
    top: 586,
    height: 50,
    borderRadius: 22,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 27,
    fontFamily: 'PoppinsBold',
  },
  summarycontainer: {
    backgroundColor: '#C0C0C0',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    //bottom: 80,
    top: 160,
    height: 100,
    width: 300,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Android
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  summarytext: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'PoppinsMedium',
  },
});
