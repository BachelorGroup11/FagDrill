import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontFamily: 'PoppinsBold',
    alignSelf: 'center',
    top: '5%',
    width: '90%',
    fontSize: 32,
    fontWeight: 'bold',
  },
  btnBackToHome: {
    //backgroundColor: 'lightgrey',
    width: 50,
    height: 50,
    top: '5%',
    right: '5%',
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  knapptext: {
    fontSize: 32,
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
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
