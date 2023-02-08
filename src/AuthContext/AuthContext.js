import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, provider } from '../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithPopup,
	getAuth,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const loggedInCheck = localStorage.getItem('isLoggedIn');
		if (loggedInCheck === 'true') {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, []);

	const SignInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(async (result) => {
				setIsLoggedIn(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	function signUp(email, password) {
		createUserWithEmailAndPassword(auth, email, password);
		setDoc(doc(db, 'users', email), {
			savedShows: [],
		});
	}

	function logIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logOut() {
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(auth.currentUser);
		});
		return () => {
			unsubscribe();
		};
	});

	return (
		<AuthContext.Provider
			value={{ signUp, logIn, logOut, user, SignInWithGoogle }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function UserAuth() {
	return useContext(AuthContext);
}
