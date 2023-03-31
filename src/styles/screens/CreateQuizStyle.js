import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 150,
	},
	header: {
		fontSize: 32,
		fontFamily: 'PoppinsBold',
		position: 'absolute',
		left: 32,
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
		color: 'grey',
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
	questions: {
		fontSize: 14,
		paddingHorizontal: 15,
		fontFamily: 'PoppinsSemiBold',
	},
	viewall: {
		fontSize: 14,
		fontFamily: 'PoppinsSemiBold',
		color: '#3F51B5',
		paddingHorizontal: 30,
	},
});
