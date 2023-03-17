import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/ProgressStyle";

const ProgressPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Need Fixing</Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnBackToHome}
          onPress={() => navigation.navigate("userpage")}
        >
          <Text style={styles.knapptext}>X</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProgressPage;
