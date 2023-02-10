import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDysqEOPBHzOuHp6P5IXDCy3OxdLJNlc2E',
	authDomain: 'fagdrill.firebaseapp.com',
	projectId: 'fagdrill',
	storageBucket: 'fagdrill.appspot.com',
	messagingSenderId: '529228397159',
	appId: '1:529228397159:web:ffeac941e9ab02ae3572c2',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
