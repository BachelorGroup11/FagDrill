import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import Constants from "expo-constants";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { styles } from "../styles/screens/ManageUserStyle";

const auth = getAuth();

const UserList = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSuperToggle, setIsSuperToggle] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  const [newSearch, setNewSearch] = useState("");

  let row: Array<any> = [];
  let prevOpenedRow;

  //here we fatch the user list so we can display them later
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const userQuery = query(
        collection(db, "users"),
        where("user_id", "==", user.uid)
      );

      const querySnapshot = await getDocs(userQuery);
      querySnapshot.forEach((doc) => {
        if (doc.data().is_super_admin == true) {
          setIsSuperToggle(!isSuperToggle);
          console.log(isSuperToggle);

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
        } else {
          setIsSuperToggle(isSuperToggle);

          console.log(isSuperToggle);
        }
      });
    };
    fetchData().catch((error) => console.log(error));

    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedUsers = [];

      querySnapshot.forEach((doc) => {
        const user = doc.data();
        user.id = doc.id;
        if (!user.is_super_admin == true && !user.is_admin == true) {
          fetchedUsers.push(user);
        }
      });

      setUsers(fetchedUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Create a two button alert as provention to not make admins by accident. this alert have a cancel and edit admin status.
  const createTwoButtonAlertAdmin = (userId, is_admin) =>
    Alert.alert(
      "Are you sure you want to edit the admin status of this user?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Edit admin status",
          onPress: () => makeAdmin(userId, is_admin),
        },
      ]
    );
  // This edits the admin status of the user.
  const makeAdmin = async (userId, is_admin) => {
    try {
      // Retrieve the user's information
      const userRef = doc(db, "users", userId);
      // Check if the current user is a super admin

      // Update the user's is_admin property in the Firestore database
      await updateDoc(userRef, { is_admin: !is_admin });

      console.log("User is now an admin");

      // Update the state or UI with the updated user data
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

  // Create a two button alert as provention to not delete users by accident. this alert have a cancel and delete users.
  const createTwoButtonAlertDelete = (user) =>
    Alert.alert("Are you sure you want to delete this user?", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Delete", onPress: () => deleteUser(user) },
    ]);

  // this delets users.
  const deleteUser = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      await deleteDoc(userRef); // Delete the user document from Firestore
      console.log("User deleted successfully");
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers); // Update the list of users with the deleted user removed
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const fetchSearchUsers = async (newSearch) => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const fetchedUsers = [];

    querySnapshot.forEach((doc) => {
      const user = doc.data();
      if (isSuperToggle == true && user.email.includes(newSearch)) {
        user.id = doc.id;
        fetchedUsers.push(user);
        
      } else {
        if (!user.is_super_admin == true && !user.is_admin == true && user.email.includes(newSearch)) {
          user.id = doc.id;
          fetchedUsers.push(user);
        }
      }
    });

    setUsers(fetchedUsers);
    setLoading(false);
  };

  const renderUser = ({ item, index }, onClick) => {
    const closeRow = (index) => {
      console.log("closerow");
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    //renders when swiping the user name.
    const renderRightActions = (progress, dragX, onClick) => {
      if (isSuperToggle === true) {
        return (
          <View
            style={{
              flexDirection: "row",
              margin: 0,
              alignContent: "center",
              justifyContent: "center",
              width: 200,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: item.is_admin ? "gray" : "#3F51B5",
                padding: 10,
                borderRadius: 8,
                marginRight: 8,
                height: 40,
                width: 125,
                alignContent: "center",
              }}
              onPress={() => createTwoButtonAlertAdmin(item.id, item.is_admin)}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {item.is_admin ? "Remove Admin" : "Make Admin"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#f44336",
                padding: 10,
                borderRadius: 8,
                height: 40,
              }}
              onPress={onClick}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Delete</Text>
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
          <View
            style={{
              flexDirection: "row",
              margin: 0,
              alignContent: "center",
              justifyContent: "center",
              width: 80,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#f44336",
                padding: 10,
                borderRadius: 8,
                height: 40,
              }}
              onPress={onClick}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Delete</Text>
            </TouchableOpacity>
          </View>
        );
      }
    };

    return (
      <GestureHandlerRootView>
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
        rightOpenValue={-100}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            alignContent: "center",
            justifyContent: "center",
            //marginVertical: 20,
            backgroundColor: "#FEFEFE",
            height: 70,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontWeight: "bold",
              fontSize: 20,
              left: 30,
              color: "black",
            }}
          >
            {item.email}
          </Text>
          <Text
            style={{
              color: "black",
              alignSelf: "center",
              position: "absolute",
              bottom: -15,
              height: 40,
            }}
          >
            ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
              position: "absolute",
              right: 30,
            }}
          >
            {"<"}
          </Text>
        </View>
      </Swipeable>
      </GestureHandlerRootView>
    );
  };

  return (
    <View style={{top: "15%"}}>

        <TextInput
					style={{ backgroundColor: "#C0C0C0",
          alignSelf: "center",
          position: "absolute",
          height: 40,
          marginHorizontal: 50,
          borderRadius: 10,
          width: "90%"}}
          placeholder=" Search..."
					onChangeText={(text) => fetchSearchUsers(text)}
				/>

      
        <FlatList
          data={users}
          renderItem={(v) =>
            renderUser(v, () => {
              console.log("pressed", v);
              createTwoButtonAlertDelete(v.item.id);
            })
          }
          keyExtractor={(item) => item.id}
          style={{marginTop: 50, width: "90%", alignSelf: "center"}}
        />
      
    </View>
  );
};

export default UserList;
