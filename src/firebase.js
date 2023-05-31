import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyASt7OgLhsOZJJ9IroH9uZjD5Ea7Eu4J4g',
    authDomain: 'todo-app-eb184.firebaseapp.com',
    projectId: 'todo-app-eb184',
    storageBucket: 'todo-app-eb184.appspot.com',
    messagingSenderId: '70705533592',
    appId: '1:70705533592:web:6f59870f1583a824dab6ed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore();

export default app;
