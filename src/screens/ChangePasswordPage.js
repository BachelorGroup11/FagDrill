import { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/ChangePasswordStyle";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { collection, query, getDocs, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ChangePasswordPage = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isToggle, setIsToggle] = useState(false);
	const auth = getAuth();
	const user = auth.currentUser;
  // Finds ut if the current user is an admin, and set isToggle to tru if the user is admin.
  useEffect(() => {
		const fetchData = async () => {
			const userQuery = query(
				collection(db, 'users'),
				where('user_id', '==', user.uid)
			);

			const querySnapshot = await getDocs(userQuery);
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
				if (doc.data().is_admin == true) {
					setIsToggle(!isToggle)
					console.log(isToggle)
				}else{
					setIsToggle(isToggle)
					console.log(isToggle)
				}
			});
		};
		fetchData().catch((error) => console.log(error));
	}, []);

	const goToUserPages = () => {
		console.log(isToggle)
    //checkes if user is admin. using isToggle that we set earlier. And choses userpage or useradminPage
		if (isToggle === true){
			navigation.replace('Userpageadmin');
		}else if (isToggle === false) {
			navigation.replace('userpage');
		}
	};

  // Gets Current Pasword and CHanges it into New
  const changePassword = (oldPassword, newPassword) => {
    const credential = EmailAuthProvider.credential(user.email, oldPassword);

    reauthenticateWithCredential(user, credential)
      .then(() => {
        updatePassword(user, newPassword)
          .then(() => {
            goToUserPages()
            //navigation.navigate("userpage"); //Once password change it goes to userpage
          })
          .then(() => {
            alert("Successfully updated password");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Change{"\n"}Password</Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnBackToHome}
          onPress={() => goToUserPages()}
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
          onPress={() => changePassword(currentPassword, newPassword)}
        >
          <Text style={styles.YourAccountText2}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordPage;
