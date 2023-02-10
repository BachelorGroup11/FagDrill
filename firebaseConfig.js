import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
	initializeAuth,
	getReactNativePersistence,
} from 'firebase/auth/react-native';

const firebaseConfig = {
	apiKey: 'AIzaSyDysqEOPBHzOuHp6P5IXDCy3OxdLJNlc2E',
	authDomain: 'fagdrill.firebaseapp.com',
	projectId: 'fagdrill',
	storageBucket: 'fagdrill.appspot.com',
	messagingSenderId: '529228397159',
	appId: '1:529228397159:web:ffeac941e9ab02ae3572c2',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});
