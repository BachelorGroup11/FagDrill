import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  btnChoice: {
    backgroundColor: '#3F51B5',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    borderRadius: 10,
    width: 320,
    marginBottom: 10,
    top: 290,
    zIndex: 1,
    paddingHorizontal: 30,
    borderBottomWidth: 5,
    borderBottomColor: '#2C3A87',
  },
  btnText: {
    color: '#ffffff',
    fontFamily: 'PoppinsMedium',
    fontSize: 10,
  },
  false: {
    backgroundColor: '#F75555',
    height: 180,
    width: 160,
    left: 85,
    borderBottomWidth: 6,
    borderBottomColor: '#EA1E61',
  },
  correct: {
    backgroundColor: '#12D18E',
    height: 180,
    width: 160,
    right: 85,
    borderBottomWidth: 6,
    borderBottomColor: '#00B777',
  },
});
