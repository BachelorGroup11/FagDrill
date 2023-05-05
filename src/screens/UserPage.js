import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/UserStyle';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { LoadingAnimation } from '../components/Index';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UserPage = ({ navigation }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userName, setUserName] = useState([]);
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
        setUserName(doc.data().email.split('@')[0]) 
        if (doc.data().is_admin == true || doc.data().is_super_admin == true) {
          setIsToggle(!isToggle);
          setIsLoaded(!isLoaded);
        } else {
          setIsLoaded(!isLoaded);
          setIsToggle(isToggle);
        }
      });
    };
    fetchData().catch((error) => console.log(error));
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('loginpage');
      })
      .catch((error) => console.log(error));
  };

  return (
    <ImageBackground
      source={require('../assets/images/user_bg.png')}
      style={{ flex: 1, width: null, alignSelf: 'stretch' }}
    >
      {!isLoaded ? (
        <LoadingAnimation />
      ) : isToggle ? (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>{userName}</Text>
          <TouchableOpacity
            style={styles.btnBackToHome}
            onPress={() => navigation.navigate('homepage')}
          >
            <Text style={styles.knapptext}>X</Text>
          </TouchableOpacity>

          <View style={styles.sidebyside}>
            <TouchableOpacity
              style={styles.buttonDashboardPage}
              onPress={() => navigation.navigate('dashboardpage')}
            >
              <MaterialCommunityIcons
                name="chart-donut"
                size={26}
                color="#FFFFFF"
                style={{ left: 10}}
              />
              <Text style={styles.YourAccountText1}>Quiz Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonManageQuizPage}
              onPress={() => navigation.navigate('managequizpage')}
            >
              <FontAwesome5
                name="edit"
                size={23}
                color="#FFFFFF"
                style={{ left: 10 }}
              />
              <Text style={styles.YourAccountText1}>Manage Quizzes</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sidebyside}>
          <TouchableOpacity
            style={styles.buttonManageUserPage}
            onPress={() => navigation.navigate('manageuserpage')}
          >
            <FontAwesome5
              name="user-edit"
              size={20}
              color="#FFFFFF"
              style={{ left: 10  }}
            />
            <Text style={styles.YourAccountText1}>Manage Users</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonProgressPage}
            onPress={() => navigation.navigate('progresspage')}
          >
            <Entypo
              name="progress-two"
              size={25}
              color="#FFFFFF"
              style={{ left: 10  }}
            />
            <Text style={styles.YourAccountText1}>Progress</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.sidebyside}>
          <TouchableOpacity
            style={styles.buttonResultsPage}
            onPress={() => navigation.navigate('resultspage')}
          >
            <Foundation
              name="results"
              size={25}
              color="#FFFFFF"
              style={{left: 10}}
            />
            <Text style={styles.YourAccountText1}>Results</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonChangePasswordPage}
            onPress={() => navigation.navigate('changepasswordpage')}
          >
            <FontAwesome5
              name="lock"
              size={20}
              color="#FFFFFF"
              style={{ left: 10  }}
            />
            <Text style={styles.YourAccountText1}>Change Password</Text>
          </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.appButtonContainer2}
            onPress={() => handleSignOut()}
          >
            <Text style={styles.YourAccountText2}>Sign Out</Text>
          </TouchableOpacity>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>{userName}</Text>

          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.btnBackToHome, { top: 55 }]}
              onPress={() => navigation.navigate('homepage')}
            >
              <Text style={styles.knapptext}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.normalButtonProgressPage}
              onPress={() => navigation.navigate('progresspage')}
            >
              <Entypo
                name="progress-two"
                size={25}
                color="#FFFFFF"
                style={{ left: 10 }}
              />
              <Text style={styles.YourAccountText1}>Progress</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.normalButtonResultsPage}
              onPress={() => navigation.navigate('resultspage')}
            >
              <Foundation
                name="results"
                size={25}
                color="#FFFFFF"
                style={{left: 10}}
              />
              <Text style={styles.YourAccountText1}>Results</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.normalButtonChangePasswordPage}
              onPress={() => navigation.navigate('changepasswordpage')}
            >
              <FontAwesome5
                name="lock"
                size={20}
                color="#FFFFFF"
                style={{ left: 10 }}
              />
              <Text style={styles.YourAccountText1}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.appButtonContainer2}
              onPress={() => handleSignOut()}
            >
              <Text style={styles.YourAccountText2}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </ImageBackground>
  );
};

export default UserPage;
