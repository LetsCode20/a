import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

export const firebaseApp = {
    apiKey: 'AIzaSyD0_PC_1-5irwNCNtgNLzpsnuCwDys857k',
    authDomain: 'ecom-a5b4a.firebaseapp.com',
    projectId: 'ecom-a5b4a',
    storageBucket: 'ecom-a5b4a.appspot.com',
    messagingSenderId: '307226037284',
    appId: '1:307226037284:web:c6635a737231f7cbe9dcb1',
};

export const app = initializeApp(firebaseApp);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export const currentUser = auth.currentUser;

export const db = getFirestore();
export const collectionRef = collection(db, 'collections');
