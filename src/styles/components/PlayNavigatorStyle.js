import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		alignSelf: 'center',
		position: 'absolute',
		borderColor: '#3F51B5',
		borderWidth: 2,
		borderRadius: 15,
		top: 720,
		width: "90%",
		height: 60,
	},
	index: {
		width: 40,
		height: 40,
		borderColor: '#3F51B5',
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	indextext: {
		fontSize: 14,
		fontFamily: 'PoppinsBold',
		color: '#3F51B5',
	},
	nextBtn: {
		backgroundColor: '#3F51B5',
		height: 40,
		borderRadius: 22,
		width: 80,
		justifyContent: 'center',
		alignItems: 'center',
	},
	previousBtn: {
		backgroundColor: '#3F51B5',
		height: 40,
		borderRadius: 22,
		width: 80,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		color: '#ffffff',
		fontSize: 12,
		fontFamily: 'PoppinsMedium',
	},
});
