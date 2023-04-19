import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		paddingTop: 90,
		flex: 1,
	},
	header: {
		fontSize: 32,
		fontFamily: "PoppinsBold",
		marginLeft: 18,
		top: -50,
	},
	boxstyles: {
		borderColor: "#3F51B5",
		borderWidth: 1,
		width: 200,
		marginHorizontal: 12,
	},
	dropdownstyles: {
		color: "#3F51B5",
		borderColor: "#3F51B5",
		width: 200,
		marginHorizontal: 12,
	},
	save: {
		width: 280,
		height: 50,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#12D18E",
		alignSelf: "center",
		top: 620,
		position: "absolute",
	},
	savetext: {
		fontFamily: "PoppinsSemiBold",
		fontSize: 16,
		color: "#ffffff",
	},
});
