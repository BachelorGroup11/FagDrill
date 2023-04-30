import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	containerTo: {
		flex: 1,
	},
	textWrapper: {
		alignSelf: "center",
		width: "90%",
		top: "40%",
	},
	Infotext: {
		color: '#000',
		fontSize: 32,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	levelText: {
		fontSize: 17,
		color: '#000',
		fontWeight: 'bold',
		marginBottom:5,
	},
	descriptionText: {
		fontSize: 15,
		fontWeight: '600',
	},
	startBtn: {
		backgroundColor: '#3F51B5',
		alignSelf: 'center',
		position: 'absolute',
		top: "90%",
		height: 78,
		borderRadius: 22,
		width: "90%",
		justifyContent: 'center',
		
		shadowColor: 'grey',
		shadowOffset: { width: 1, height: 5 },
		shadowOpacity: 30,
		shadowRadius: 3,
	},
	btnText: {
		color: '#ffffff',
		fontSize: 27,
		fontFamily: 'PoppinsBold',
		alignSelf: 'center',
	},
});
