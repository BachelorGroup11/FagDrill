import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/UserStyle";

const UserPage = ({ navigation, onPress }) => {
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
          onPress={onPress}
        />
        <Text style={styles.YourAccountText1}>Progress</Text>
        <TouchableOpacity
          style={styles.appButtonContainer1}
          onPress={onPress}
        />
        <Text style={styles.YourAccountText1}>Change Password</Text>
        <TouchableOpacity
          style={styles.appButtonContainer2}
          onPress={() => navigation.navigate("loginpage")}
        />
        <Text style={styles.YourAccountText2}>Log Out</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserPage;
