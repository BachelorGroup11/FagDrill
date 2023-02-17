import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	containerTo: {
		flex: 1,
	},
	knapptext: {
		fontSize: 30,
		alignSelf: 'flex-start',
		color: '#000',
		padding: 5,
		paddingLeft: 10,
	},
	textWrapper: {
		textAlign: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		bottom: 60,
	},
	Infotext: {
		fontSize: 30,
		paddingTop: '90%',
		color: '#000',
		fontSize: 32,
		fontWeight: 'bold',
		marginVertical: 1,
	},
	levelText: {
		fontSize: 17,
		color: '#000',
		top: 341,
		fontWeight: 'bold',
	},
	descriptionText: {
		fontSize: 15,
		fontWeight: '600',
		width: 300,
		marginVertical: 10,
	},
	btnBackToHome: {
		width: 50,
		height: 50,
		borderRadius: 30,
		position: 'relative',
		left: 20,
		top: 10,
		backgroundColor: 'red',
	},
	startBtn: {
		backgroundColor: '#3F51B5',
		alignSelf: 'center',
		position: 'absolute',
		top: 530,
		height: 58,
		borderRadius: 22,
		width: 314,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		color: '#ffffff',
		fontSize: 27,
		fontFamily: 'PoppinsBold',
	},
});
