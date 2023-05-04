import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/ChangePasswordStyle';
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  getAuth,
} from 'firebase/auth';

const ChangePasswordPage = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const goToUserPages = () => {
    navigation.goBack();
  };

  const auth = getAuth();
  const user = auth.currentUser;

  // Gets Current Pasword and CHanges it into New
  const changePassword = (oldPassword, newPassword, confirmNewPassword) => {
    const credential = EmailAuthProvider.credential(user.email, oldPassword);

    reauthenticateWithCredential(user, credential)
      .then(() => {
        if (newPassword === confirmNewPassword) {
          updatePassword(user, newPassword)
            .then(() => {
              goToUserPages();
              //navigation.navigate("userpage"); //Once password change it goes to userpage
            })
            .then(() => {
              alert('Successfully updated password');
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          alert('The new passwords did not match');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Change{'\n'}Password</Text>

      <View style={styles.backbtnView}>
        <TouchableOpacity
          style={styles.btnBackToHome}
          onPress={() => goToUserPages()}
        >
          <Text style={styles.knapptext}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputViewEmail}>
        <Text>Current Password</Text>
        <TextInput
          style={styles.TextInputEmail}
          onChangeText={(text) => setCurrentPassword(text)}
          secureTextEntry
        />
      </View>

      <View style={styles.inputViewPassword}>
        <Text>New Password</Text>
        <TextInput
          style={styles.TextInputPassword}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry
        />
      </View>

      <View style={styles.inputViewPassword}>
        <Text>Confirm New Password</Text>
        <TextInput
          style={styles.TextInputPassword}
          onChangeText={(text) => setConfirmNewPassword(text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.appButtonContainer2}
        onPress={() =>
          changePassword(currentPassword, newPassword, confirmNewPassword)
        }
      >
        <Text style={styles.YourAccountText2}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChangePasswordPage;
