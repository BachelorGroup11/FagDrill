import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	containerTo: {
		flex: 1,
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
	startBtn: {
		backgroundColor: '#3F51B5',
		alignSelf: 'center',
		position: 'absolute',
		top: 586,
		height: 78,
		borderRadius: 22,
		width: 314,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: 'grey',
		shadowOffset: { width: 1, height: 5 },
		shadowOpacity: 30,
		shadowRadius: 3,
	},
	btnText: {
		color: '#ffffff',
		fontSize: 27,
		fontFamily: 'PoppinsBold',
	},
});
