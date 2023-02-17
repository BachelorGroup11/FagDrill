import React from 'react';
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

const UserPage_Admin = ({ navigation }) => {
	const goToHome = () => {
		navigation.navigate('homepage');
	};

	return (
		<ImageBackground
			source={require('../assets/images/Quizinfo_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView style={styles.containerTo}>
				<View>
					<Text style={styles.letsplay}>Din bruker{'\n'}Admin</Text>
                    
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
                        >
                            <Text style={styles.Userpagebtntext}>Logg ut</Text>
                        </TouchableOpacity>
                    
					
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default UserPage_Admin;
