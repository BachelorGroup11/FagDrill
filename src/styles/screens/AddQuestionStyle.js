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
		height: 100,
		margin: 12,
		borderRadius: 20,
		borderColor: '#CCCCCC',
		borderWidth: 1,
		textAlign: 'center',
		color: '#767575',
		fontFamily: 'PoppinsSemiBold',
		backgroundColor: '#FAFAFA',
	},
	answerinput: {
		height: 60,
		marginVertical: 8,
		marginHorizontal: 12,
		borderRadius: 20,
		borderColor: '#F2F2F2',
		borderWidth: 1,
		textAlign: 'center',
		color: '#FFFFFF',
		fontFamily: 'PoppinsSemiBold',
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
		width: 50,
		height: 50,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#12D18E',
		alignSelf: 'flex-end',
		marginRight: 14,
		marginTop: 50,
	},
	savetext: {
		fontFamily: 'PoppinsRegular',
		fontSize: 32,
		color: '#ffffff',
	},
});
