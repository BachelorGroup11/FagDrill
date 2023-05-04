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
  piechartcontainer: {
    width: '90%',
    height: '23%',
    backgroundColor: '#3F51B5',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: 120,
  },
  linechartcontainer: {
    width: '90%',
    height: '23%',
    backgroundColor: '#3F51B5',
    borderRadius: 20,
    alignSelf: 'center',
    top: 140,
  },
  progresstext: {
    color: '#FFFFFF',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
    top: '2%',
    left: 60,
  },
  averageandhighestcontainer: {
    width: '90%',
    height: '22%',
    alignSelf: 'center',
    top: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  averagecontainer: {
    width: '47.5%',
    backgroundColor: '#3F51B5',
    height: '100%',
    borderRadius: 20,
    alignItems: 'center',
  },
  averagetext: {
    color: '#FFFFFF',
    fontFamily: 'PoppinsMedium',
    fontSize: 22,
    marginTop: '10%',
  },
  percentagetext: {
    fontFamily: 'PoppinsSemiBold',
    color: '#F0BA2D',
    fontSize: 30,
    marginTop: '15%',
  },
  basedontext: {
    fontFamily: 'PoppinsMedium',
    color: '#D5D6D9',
    fontSize: 16,
    marginTop: '6%',
  },
  highestcontainer: {
    width: '47.5%',
    backgroundColor: '#3F51B5',
    height: '100%',
    borderRadius: 20,
    alignItems: 'center',
  },
});
