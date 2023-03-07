import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	containerTo: {
		flex: 1,
	},
	IndexText: {
		position: 'absolute',
		color: '#000',
		fontWeight: '400',
		fontSize: 14,
		bottom: 30,
		paddingHorizontal: 20,
	},
	QuestionText: {
		position: 'absolute',
		alignSelf: 'center',
		color: '#000',
		fontWeight: 'bold',
		fontSize: 30,
		paddingHorizontal: 20,
		top: 240,
	},
	resultsBtn: {
		backgroundColor: '#3F51B5',
		alignSelf: 'center',
		position: 'absolute',
		top: 446,
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
