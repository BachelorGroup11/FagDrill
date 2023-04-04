import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View, Animated, Button,StyleSheet } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

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

  let row: Array<any> = [];
  let prevOpenedRow;

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
  
  const renderUser = ({ item, index }, onClick) => {
    const closeRow = (index) => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <View
          style={{
            flexDirection: "row",
            margin: 0,
            alignContent: 'center',
            justifyContent: 'center',
            width: 200,
          }}>
            <TouchableOpacity
            style={{
              backgroundColor: item.is_admin ? "gray" : "#3F51B5",
              padding: 10,
              borderRadius: 8,
              marginRight: 8,
              height: 40,
              width:125,
              alignContent: "center",
            }}
            onPress={() => makeAdmin(item.id, item.is_admin)}
          >
            <Text style={{ color: "white", fontWeight: "bold" , textAlign:"center"}}>
              {item.is_admin ? "Remove Admin" : "Make Admin"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "#f44336",padding: 10,borderRadius: 8, height: 40,}} onPress={onClick}><Text style={{ color: "white", fontWeight: "bold" }}>Delete</Text></TouchableOpacity>
        </View>
      );
    };

    return(
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
        rightOpenValue={-100}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        justifyContent: 'center',
        //marginVertical: 20,
        backgroundColor: "#FEFEFE",
        height: 70,
      }}>
      <Text style={{ flex: 1, fontWeight: 'bold',fontSize: 20, left: 30, color: "black"}}>{item.email}</Text>
      <Text style={{color: "black", alignSelf: "center",position: "absolute",bottom: -15, height: 40,}}>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</Text>
      <Text style={{color: "black", fontWeight: 'bold',fontSize: 20, alignSelf: "center",position: "absolute", right: 30,}}>{"<"}</Text>
    </View>
    </Swipeable>
    );
  };

  return (
    
    <FlatList
      data={users}
      renderItem={(v) => 
        renderUser(v, () => {
          console.log('pressed', v);
          deleteUser(v.item.id)
        })}
      keyExtractor={(item) => item.id}
      style={{ padding: 16, marginTop: 50}}
    />
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});