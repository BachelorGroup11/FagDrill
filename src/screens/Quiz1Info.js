import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,StatusBar, ScrollView, Image, ImageBackground } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';


const Quiz1Info = () => {

    const navigation = useNavigation()

    const goToHome = () => {
        navigation.navigate("homepage")
    }

    
    return(
        <ImageBackground source={require('../assets/images/Quizinfo_bg.png')} style={{ flex: 1, width: null, alignSelf: 'stretch', }} >
        <SafeAreaView  style={styles.containerTo} >

         <View >
         <TouchableOpacity style={styles.btnBackToHome} onPress={()=>goToHome()}><Text style={styles.knapptext}>X</Text></TouchableOpacity>
          </View>

          <Text style={styles.Infotext}>Øving til sert nr 3</Text>

            
        </SafeAreaView>
        <StatusBar translucent backgroundColor='transparent'  />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    containerTo: {
      flex: 1,
    },
    knapptext: {
        fontSize: 30,
        alignSelf:'flex-start',
        color: '#000',
        padding:5,
        paddingLeft:10,
    },
    Infotext: {
        fontSize: 30,
        alignSelf:'center',
        justifyContent: 'center',
        paddingTop: '90%',
        color: '#000',
        padding:5,
        paddingLeft:10,
    },
    btnBackToHome: {
      width: 50,  
      height: 50,   
      borderRadius: 30,                                              
      position: 'relative',
      left:20,
      top:10,
    },
  });

export default Quiz1Info