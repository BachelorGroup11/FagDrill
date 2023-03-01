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
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
} from "firebase/auth";

const ChangePasswordPage = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  reauthenticate = (currentPassword) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const cred = auth.EmailAuthProcider.credential(user.email, currentPassword);
    return user.reathenticateWithCredential(cred);
  };

  const handleUpdatePassowrd = () => {
    reauthenticate(currentPassword)
      .then(() => {
        var user = auth.currentUser;
        user
          .updatePassword(user, newPassword)
          .then(() => {
            Alert.alert("Password was changed");
          })
          .catch((error) => {
            Alert.alert(error.messsage);
          });
      })
      .catch((error) => {
        Alert.alert(error.messsage);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Change Password</Text>

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
          onChangeText={() => setCurrentPassword()}
          secureTextEntry
        />

        <View style={styles.inputViewPassword}>
          <Text>New Password</Text>
        </View>
        <TextInput
          style={styles.TextInputPassword}
          onChangeText={() => setNewPassword()}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.appButtonContainer2}
          onPress={() => handleUpdatePassowrd()}
        >
          <Text>Change Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordPage;
