import React, {useState} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ScrollView,
	ImageBackground,
    TextInput,
    Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../styles/LoginStyle';


const LoginPage = () =>
{
    const navigation = useNavigation();

    const goToHome = () => 
    {
		navigation.navigate('homepage');
    }

    const goTpSignUp = () =>
    {
        navigation.navigate('signuppage')
    }

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (

    <SafeAreaView style={styles.container}>

        <Text style={styles.title}>LogIn</Text>

        

        <View style={styles.inputViewEmail}>
            <Text>Email</Text>    
        </View>
        <TextInput
            style={styles.TextInputEmail}
            onChangeText={(Email) => setEmail(Email)} />

        <View style={styles.inputViewPassword}>
            <Text>Password</Text>
        </View>
        <TextInput
            style={styles.TextInputPassword}
            onChangeText={(Password) => setPassword(Password)}/>

        <View style={styles.loginBtn}>
            <Button
                title='LogIn'
                color="white"
                fontWeight = "bold"
                style={styles.loginBtn}
                onPress={() => navigation.navigate("homepage")}/>
        </View>
        
        <View style={styles.orText}>
            <Text style={styles.orText}>⎯⎯⎯⎯⎯⎯⎯⎯OR⎯⎯⎯⎯⎯⎯⎯⎯</Text>
        </View>

        <View style={styles.signupBtn}>
            <Button
                title='SIGN UP'
                color="#2e216f"
                fontWeight = "underline"
                style={styles.loginBtn}
                onPress={() => navigation.navigate("signuppage")}/>
        </View>

        

    </SafeAreaView>

    );
    


};

export default LoginPage;