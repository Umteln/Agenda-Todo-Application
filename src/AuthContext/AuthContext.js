import { useContext, createContext, useState, useEffect } from 'react';
import {
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, provider, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState();
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

	//sign up
	const signUp = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password);
		setDoc(doc(db, 'users', email), {
			//adds new user to database
			tasks: [],
			events: [],
		});
		setIsLoggedIn(true);
	};

	//log in
	const logIn = (email, password) => {
		signInWithEmailAndPassword(auth, email, password);
		setIsLoggedIn(true);
	};

	//log out
	const logOut = () => {
		signOut(auth);
		setIsLoggedIn(false);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, [user]);

	return (
		<AuthContext.Provider
			value={{
				SignInWithGoogle,
				signUp,
				logIn,
				logOut,
				user,
				isLoggedIn,
				setIsLoggedIn,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
