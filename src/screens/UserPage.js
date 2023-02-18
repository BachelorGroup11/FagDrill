import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/UserStyle";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";

const UserPage = ({ navigation, onPress }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("loginpage");
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Account</Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnBackToHome}
          onPress={() => navigation.navigate("homepage")}
        >
          <Text style={styles.knapptext}>X</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.appButtonContainer1}
          onPress={() => navigation.navigate("progresspage")}
        />
        <Text style={styles.YourAccountText1}>Progress</Text>
        <TouchableOpacity
          style={styles.appButtonContainer1}
          onPress={() => navigation.navigate("changepasswordpage")}
        />
        <Text style={styles.YourAccountText1}>Change Password</Text>
        <TouchableOpacity
          style={styles.appButtonContainer2}
          onPress={() => handleSignOut()}
        />
        <Text style={styles.YourAccountText2}>Sign Out</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserPage;
