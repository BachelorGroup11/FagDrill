import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 26,
    fontFamily: 'PoppinsBold',
    position: 'absolute',
    left: 40,
    top: 90,
  },

  container2: {
    width: '85%',
    height: 110,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#3451B5',
    margin: 10,
    top: 100,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  description: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: '#FFFFFF',
  },
  questions: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  users: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  rightsection: {
    borderColor: '#FFFFFF',
    width: '30%',
  },
  editsection: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
