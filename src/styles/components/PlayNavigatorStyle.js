import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 15,
    top: 720,
    width: '85%',
    height: 60,
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
  index: {
    width: 40,
    height: 40,
    borderColor: '#2f2f2d',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 5,
  },
  indextext: {
    fontSize: 14,
    fontFamily: 'PoppinsBold',
    color: '#2f2f2d',
  },
  nextBtn: {
    height: 40,
    borderRadius: 22,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previousBtn: {
    height: 40,
    borderRadius: 22,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
