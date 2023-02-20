import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		paddingTop: 35,
		flex: 1,
	},
	containerTo: {
		flex: 1,
	},
	containerthre: {
		flex: 1,
		marginTop: 170,
		marginBottom: 50,
	},
	letsplay: {
		position: 'absolute',
		width: 157,
		height: 42,
		left: 32,
		top: 44,
		fontSize: 32,
		fontWeight: 'bold',
		color: '#000000',
	},
	imgButton: {
		flex: 1,
		width: '100%',
		alignSelf: 'stretch',
		height: '100%',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	imgBtn_profile: {
		position: 'relative',
		width: 50,
		height: 50,
		left: 304,
		top: 44,
		borderRadius: 22,
	},
	loginBtn: {
		backgroundColor: '#2e216f',
		alignSelf: 'center',
		position: 'relative',
		height: 40,
		borderRadius: 10,
		width: 250,
		margin: 10,
	},
});
