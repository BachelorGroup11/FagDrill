import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: "90%",
		height: 160,
		backgroundColor: 'white',
		borderRadius: 10,
		flexDirection: 'row',
		backgroundColor: '#3451B5',
		margin: 10,
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
		borderLeftWidth: 1,
		borderColor: '#FFFFFF',
		width: '20%',
	},
	editsection: {
		height: '50%',
		borderBottomWidth: 1,
		borderBottomColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	deletesection: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '50%',
	},
});
