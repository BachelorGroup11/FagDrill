import React, { useContext } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ImageBackground,
    Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/UserPageAdminStyle';
import { collection, deleteDoc, doc,firebase, Firestore, query, getDoc, getDocs, getUsers, setDoc, addDoc, where } from 'firebase/firestore';
import { db, auth,} from '../../firebaseConfig';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";



const UserPage_Admin = ({ navigation }) => {
	const goToHome = () => {
		navigation.navigate('homepage');
	};

	const handleSignOut = () => {
		auth
		  .signOut()
		  .then(() => {
			navigation.replace("loginpage");
		  })
		  .catch((error) => console.log(error));
	  };

	const usersCollectionRef= collection(db,"users");
	

	//<Text style={styles.knapptext}>{user.email}</Text>

	const auth = getAuth();
	const user = auth.currentUser;
	//alert(user.uid)
	const uid = user.uid;
	const q = query(usersCollectionRef, where(uid, "==", user.user_id), where(user.is_admin, "==", true));
	

	return (
		<ImageBackground
			source={require('../assets/images/Quizinfo_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView style={styles.containerTo}>
				<View>
				
				<Text style={styles.knapptext}>{q}</Text>

				</View>
					<TouchableOpacity
						style={styles.imgBtn_profile}
						onPress={() => goToHome()}
					>
						<Text style={styles.knapptext}>X</Text>
					</TouchableOpacity>

                    
				        <TouchableOpacity
                            style={styles.Userpagebtn}
                        >
                            <Text style={styles.Userpagebtntext}>Administrer quizer</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.Userpagebtn}
                        >
                            <Text style={styles.Userpagebtntext}>Administrer Brukere</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.Userpagebtn}
                        >
                            <Text style={styles.Userpagebtntext}>Quiz resulteter</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.Userpagebtn}
							onPress={() => handleSignOut()}
                        >
                            <Text style={styles.Userpagebtntext}>Logg ut</Text>
                        </TouchableOpacity>
                    
					
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default UserPage_Admin;
