import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '-3%',
    width: '100%',
  },
  modalView: {
    height: 500,
    width: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 30,
    width: '50%',
    bottom: '2%',
    height: '12%',
    padding: 10,
    elevation: 2,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
  },
  modalText: {
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  headerview: {
    borderBottomWidth: 1,
    borderBottomColor: '#afb7bb',
  },
  modalHeader: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
    marginBottom: 15,
  },
  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
