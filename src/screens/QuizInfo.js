import React, { useEffect, useState } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StatusBar,
	ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/QuizInfoStyle';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const QuizInfo = ({ route, navigation }) => {
	const [info, setInfo] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const docRef = doc(db, 'quizzes', route.params.quiz);
			const docSnap = await getDoc(docRef);
			docSnap.exists()
				? setInfo(docSnap.data().info)
				: console.log('no such document');
		};

		fetchData().catch((error) => console.log(error));
	}, []);

	return (
		<ImageBackground
			source={require('../assets/images/Quizinfo_bg.png')}
			style={{ flex: 1, width: null, alignSelf: 'stretch' }}
		>
			<SafeAreaView style={styles.containerTo}>
				<View>
					<TouchableOpacity
						style={styles.btnBackToHome}
						onPress={() => navigation.navigate('homepage')}
					>
						<Text style={styles.knapptext}>X</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.textWrapper}>
					<Text style={styles.levelText}>Level X</Text>
					<Text style={styles.Infotext}>
						Øving til sert nr {route.params.number}
					</Text>
					{info && <Text style={styles.descriptionText}>{info}</Text>}
				</View>
				<TouchableOpacity
					style={styles.startBtn}
					onPress={() => navigation.navigate('playpage')}
				>
					<Text style={styles.btnText}>START</Text>
				</TouchableOpacity>
			</SafeAreaView>
			<StatusBar translucent backgroundColor="transparent" />
		</ImageBackground>
	);
};

export default QuizInfo;
