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
import { styles } from '../styles/SignUpStyle';
import LoginPage from './Loginpage';


const SignUpPage = () =>
{
    const navigation = useNavigation();

    const goToHome = () => 
    {
		navigation.navigate('homepage');
    }

   

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (

    <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Sign Up</Text>

        

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

        <View style={styles.signupBtn}>
            <Button
                title='Sign Up'
                color="white"
                fontWeight = "bold"
                style={styles.signupBtn}
                onPress={() => navigation.navigate("homepage")}/>
        </View>
        
        <View style={styles.orText}>
            <Text style={styles.orText}>⎯⎯⎯⎯⎯⎯⎯⎯OR⎯⎯⎯⎯⎯⎯⎯⎯</Text>
        </View>

        <View style={styles.loginBtn}>
            <Button
                title='LOGIN'
                color="#2e216f"
                fontWeight = "underline"
                style={styles.loginBtn}
                onPress={() => navigation.navigate("loginpage")}/>
        </View>

        

    </SafeAreaView>

    );
    


};

export default SignUpPage;