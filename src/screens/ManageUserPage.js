import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/ManageUserStyle";
import UserList from "../components/UserList";

const ManageuserPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Manage Users</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnBackToHome}
          onPress={() => navigation.navigate("userpage")}
        >
          <Text style={styles.knapptext}>X</Text>
        </TouchableOpacity>
        <UserList />
      </View>
    </SafeAreaView>
  );
};

export default ManageuserPage;
