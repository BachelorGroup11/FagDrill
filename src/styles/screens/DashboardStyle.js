import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 26,
    fontFamily: 'PoppinsBold',
    position: 'absolute',
    left: 30,
    top: 90,
  },
  searchsection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    top: 120,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  searchinput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    color: '#424242',
    fontWeight: '600',
  },
  searchicon: {
    padding: 10,
  },
});
