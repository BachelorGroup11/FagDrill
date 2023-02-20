import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	IndexText: {
		position: 'absolute',
		color: '#000',
		fontWeight: '400',
		fontSize: 14,
		bottom: 65,
		paddingHorizontal: 20,
	},
	QuestionText: {
		position: 'absolute',
		alignSelf: 'center',
		color: '#000',
		fontWeight: 'bold',
		fontSize: 30,
		paddingHorizontal: 20,
		top: 330,
	},
	btnBack: {
		position: 'relative',
		width: 50,
		height: 50,
		borderRadius: 30,
		left: 20,
		top: 10,
	},
	btnChoice: {
		backgroundColor: '#3F51B5',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		height: 58,
		borderRadius: 22,
		width: 314,
		margin: 5,
		top: 360,
	},
	btnText: {
		color: '#ffffff',
		fontFamily: 'PoppinsBold',
		fontSize: 27,
	},
});
