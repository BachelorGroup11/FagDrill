import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
  },
  header: {
    fontSize: 30,
    fontFamily: 'PoppinsBold',
    position: 'absolute',
    left: 22,
    top: 90,
  },
  title: {
    fontSize: 14,
    paddingHorizontal: 15,
    fontFamily: 'PoppinsSemiBold',
  },
  input: {
    height: 40,
    margin: 12,
    padding: 5,
    borderBottomColor: '#3F51B5',
    borderBottomWidth: 1,
    color: '#000000',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    top: 25,
    width: screenWidth,
    justifyContent: 'space-evenly',
    height: 100,
  },
  save: {
    width: 150,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3BCF2',
  },
  savetext: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
  },
  add: {
    width: 150,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F51B5',
  },
  addtext: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: '#ffffff',
  },
  questionscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  questions: {
    fontSize: 14,
    paddingHorizontal: 15,
    fontFamily: 'PoppinsSemiBold',
    marginBottom: 5,
  },
  viewall: {
    fontSize: 14,
    fontFamily: 'PoppinsSemiBold',
    color: '#3F51B5',
    paddingHorizontal: 30,
  },
  boxstyles: {
    borderColor: '#3F51B5',
    borderWidth: 0,
    borderBottomWidth: 1,
    marginTop: -10,
  },
  categorystyles: { marginTop: 15 },
  inputstyles: {
    color: 'grey',
    marginTop: 15,
  },
  categorystyles: { marginTop: 15 },
  androidHouers: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    width: 50,
    flex: 1,
    textAlign: 'center',
  },
  androidMin: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    width: 50,
    flex: 1,
    textAlign: 'center',
  },
  android: {
    //backgroundColor: "#000000",
    alignSelf: 'flex-start',
    paddingLeft: 15,
    width: '30%',
    flexDirection: 'row',
  },
});
