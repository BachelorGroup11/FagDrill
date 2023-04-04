import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedUsers = [];

      querySnapshot.forEach((doc) => {
        const user = doc.data();
        user.id = doc.id;
        fetchedUsers.push(user);
      });

      setUsers(fetchedUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const makeAdmin = async (userId, is_admin) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { is_admin: !is_admin });
      console.log("User is now an admin");
      const updatedUsers = users.map((user) => {
        if (user.id === userId) {
          return { ...user, is_admin: !is_admin };
        }
        return user;
      });
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      await deleteDoc(userRef);
      console.log("User deleted successfully");
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const renderUser = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
        top: 30,
      }}
    >
      <Text style={{ flex: 1 }}>{item.email}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: item.is_admin ? "gray" : "#3F51B5",
          padding: 10,
          borderRadius: 8,
          marginRight: 8,
        }}
        onPress={() => makeAdmin(item.id, item.is_admin)}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {item.is_admin ? "Remove Admin" : "Make Admin"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#f44336",
          padding: 10,
          borderRadius: 8,
        }}
        onPress={() => deleteUser(item.id)}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Delete User</Text>
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
