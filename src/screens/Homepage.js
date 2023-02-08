import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,StatusBar, ScrollView, Image, ImageBackground } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';


const HomePage = () => {

    const navigation = useNavigation()

    const goToFirst = () => {
        navigation.navigate("quiz1info")
    }

    const Alert = () => {
        alert('Kommer når vi har fått fikset profil siden')
    }
    

    
    return(
        <ImageBackground source={require('../assets/images/home_page_bg.png')} style={{ flex: 1, width: null, alignSelf: 'stretch', }} >
        <SafeAreaView  style={styles.containerTo} >

         <View >
          <Text style={styles.letsplay}>Let's play</Text>
          </View>
          
            <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.imgBtn_profile} onPress={()=>Alert()}><ImageBackground source={require('../assets/images/Propile_btn_bg.png')} style={styles.imgButton} ></ImageBackground></TouchableOpacity>  
          
              <View style={styles.containerthre}>
              <TouchableOpacity style={styles.knappBytteS} onPress={()=>goToFirst()}><ImageBackground source={require('../assets/images/QuizBtn.png')} style={styles.imgButton} ><Text style={styles.knapptext}>Øving til sert nr3</Text></ImageBackground></TouchableOpacity>
                <TouchableOpacity style={styles.knappBytteS} onPress={()=>goToFirst()}><ImageBackground source={require('../assets/images/QuizBtn.png')} style={styles.imgButton} ><Text style={styles.knapptext}>Øving til sert nr3</Text></ImageBackground></TouchableOpacity>
                <TouchableOpacity style={styles.knappBytteS} onPress={()=>goToFirst()}><ImageBackground source={require('../assets/images/QuizBtn.png')} style={styles.imgButton} ><Text style={styles.knapptext}>Øving til sert nr3</Text></ImageBackground></TouchableOpacity>
                <TouchableOpacity style={styles.knappBytteS} onPress={()=>goToFirst()}><ImageBackground source={require('../assets/images/QuizBtn.png')} style={styles.imgButton} ><Text style={styles.knapptext}>Øving til sert nr3</Text></ImageBackground></TouchableOpacity>
                <TouchableOpacity style={styles.knappBytteS} onPress={()=>goToFirst()}><ImageBackground source={require('../assets/images/QuizBtn.png')} style={styles.imgButton} ><Text style={styles.knapptext}>Øving til sert nr3</Text></ImageBackground></TouchableOpacity>
                <TouchableOpacity style={styles.knappBytteS} onPress={()=>goToFirst()}><ImageBackground source={require('../assets/images/QuizBtn.png')} style={styles.imgButton} ><Text style={styles.knapptext}>Øving til sert nr3</Text></ImageBackground></TouchableOpacity>
              </View>
            </ScrollView>
        </SafeAreaView>
        <StatusBar translucent backgroundColor='transparent'  />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 35,
      flex: 1,
    }, 
    containerTo: {
      flex: 1,
      },
    containerthre: {
      flex: 1,
      marginTop:170,
      marginBottom: 50,
      },
      letsplay: {
        position: 'absolute',
        width: 157,
        height: 42,
        left: 32,
        top: 44,
        
        fontSize: 32,
        fontWeight: "bold",
        color: '#000000',
      },
    
    knapptext: {
        fontSize: 30,
        alignSelf:'center',
        color: '#ffffff',
        
        padding:5,
        paddingLeft:10,
    },
    
    knappBytteS: {
      borderRadius:22,
      overflow: 'hidden',
      borderColor: "#ffffff",
      alignSelf: 'center',
      justifyContent: 'center',
      
      
      marginVertical:10,
      marginHorizontal:0,
      height:200,
      width:320,
      
      borderColor: '#2e216f',
      borderWidth: 0,
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
        borderRadius:22,
     
      },

  });

export default HomePage