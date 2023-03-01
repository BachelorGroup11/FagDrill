import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/ChangePasswordStyle";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
} from "firebase/auth";

const ChangePasswordPage = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const validatePassword = (currentPassword) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const credential = promptForCredentials();

    reauthenticateWithCredential(user, credential)
      .then(() => {
        // User re-authenticated.
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
  };

  const changePassword = (newPassword) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const credential = promptForCredentials();

    reauthenticateWithCredential(user, credential)
      .then(() => {
        updatePassword(user, newPassword)
          .then(() => {
            console.log(`Set new password to: ${newPassword}`);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Change{"\n"}Password</Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnBackToHome}
          onPress={() => navigation.navigate("userpage")}
        >
          <Text style={styles.knapptext}>X</Text>
        </TouchableOpacity>
        <View style={styles.inputViewEmail}>
          <Text>Current Password</Text>
        </View>
        <TextInput
          style={styles.TextInputEmail}
          onChangeText={(text) => setCurrentPassword(text)}
          secureTextEntry
        />

        <View style={styles.inputViewPassword}>
          <Text>New Password</Text>
        </View>
        <TextInput
          style={styles.TextInputPassword}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.appButtonContainer2}
          onPress={() => changePassword(newPassword)}
        >
          <Text style={styles.YourAccountText2}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordPage;
