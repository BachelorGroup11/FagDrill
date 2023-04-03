import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	input: {
		height: 100,
		margin: 12,
		borderRadius: 20,
		borderColor: '#CCCCCC',
		borderWidth: 1,
		textAlign: 'center',
		color: '#767575',
		fontFamily: 'PoppinsSemiBold',
		backgroundColor: '#FAFAFA',
		fontSize: 16,
		color: '#000000',
	},
	checkbox: {
		height: 30,
		width: 30,
		borderRadius: 5,
		marginHorizontal: 5,
	},
	inputcontainer: {
		display: 'flex',
		flexDirection: 'row',
		width: screenWidth,
		alignItems: 'center',
		justifyContent: 'center',
	},
	answerinput: {
		height: 60,
		marginVertical: 8,
		borderRadius: 20,
		borderColor: '#F2F2F2',
		borderWidth: 1,
		width: 300,
		textAlign: 'center',
		color: '#FFFFFF',
		fontFamily: 'PoppinsRegular',
		backgroundColor: '#3F51B5',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		position: 'absolute',
		top: 500,
		width: screenWidth,
		justifyContent: 'space-evenly',
	},
	save: {
		width: 280,
		height: 50,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#12D18E',
		alignSelf: 'center',
		marginTop: 60,
	},
	savetext: {
		fontFamily: 'PoppinsSemiBold',
		fontSize: 16,
		color: '#ffffff',
	},
});
