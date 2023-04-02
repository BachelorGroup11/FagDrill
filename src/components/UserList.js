import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await firebase
        .firestore()
        .collection("users")
        .get();
      const fetchedUsers = [];

      querySnapshot.forEach((doc) => {
        const user = doc.data();
        user.id = doc.id;
        fetchedUsers.push(user);
      });

      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []);

  const makeAdmin = async (userId) => {
    try {
      const userRef = firebase.firestore().collection("users").doc(userId);
      await userRef.update({ is_admin: true });
      console.log("User is now an admin");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const renderUser = ({ item }) => (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 8 }}
    >
      <Text style={{ flex: 1 }}>{item.email}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: item.is_admin ? "gray" : "#3F51B5",
          padding: 8,
          borderRadius: 8,
        }}
        onPress={() => makeAdmin(item.id)}
        disabled={item.is_admin}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Make Admin</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderUser}
      keyExtractor={(item) => item.id}
      style={{ padding: 16 }}
    />
  );
};

export default UserList;
