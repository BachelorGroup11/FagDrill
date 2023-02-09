import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

    title: {
        alignself: "center", 
        position: "absolute",
        right:155,
        bottom: 539,
        fontSize: 20,
        fontWeight: "bold",
    },


    TextInputEmail: {
        backgroundColor: "#C0C0C0",
        alignSelf: "center", 
        position: "absolute",
        bottom: 435,
        height: 40,
        borderRadius: 10,
        width: 250, 

    },

    TextInputPassword: {
        backgroundColor: "#C0C0C0",
        alignSelf: "center", 
        position: "absolute",
        bottom: 350,
        height: 40,
        borderRadius: 10,
        width: 250, 

    },

    inputViewEmail: {
        border: "1px solid",
        alignItems: "center",   
        position: "absolute",
        bottom: 480,   
        right: 277 

    },

    inputViewPassword: {
        border: "1px solid",
        alignItems: "center",   
        position: "absolute",
        bottom: 395,    
        width: 190, 
    },

    signupBtn:{
        backgroundColor: "#2e216f",
        alignSelf: "center", 
        position: "absolute",
        bottom: 235,
        height: 40,
        borderRadius: 10,
        width: 250, 
    },

    loginBtn:{
        alignSelf: "center", 
        position: "absolute",
        bottom: 180,
        height: 40,
        borderRadius: 10,
        width: 250, 
        fontWeight: "underline",
        fontSize: 15,
        
    },

    loginText:{
        color: "white",
        alignself: "center", 
        position: "absolute",
        right:155,
        bottom: 12,
        right: 107,
        fontWeight: "bold",
    },

    orText:{
        color: "#00bfff",
        alignSelf: "center", 
        position: "absolute",
        bottom: 95,
        height: 40,
    }

    

    
});
