import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
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

const auth = getAuth();

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSuperToggle, setIsSuperToggle] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  let row: Array<any> = [];
  let prevOpenedRow;

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

  const deleteUser = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data();
      if (
        currentUser &&
        (currentUser.uid === userData.created_by ||
          userData.is_super_admin === true) &&
        userData.is_super_admin !== true
      ) {
        await deleteDoc(userRef);
        console.log("User deleted successfully");
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      } else {
        console.log("You are not authorized to perform this action");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const renderUser = ({ item, index }, onClick) => {
    const closeRow = (index) => {
      console.log("closerow");
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

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
              onPress={() => makeAdmin(item.id, item.is_admin)}
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
    );
  };

  return (
    <FlatList
      data={users}
      renderItem={(v) =>
        renderUser(v, () => {
          console.log("pressed", v);
          deleteUser(v.item.id);
        })
      }
      keyExtractor={(item) => item.id}
      style={{ padding: 16, marginTop: 50 }}
    />
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
