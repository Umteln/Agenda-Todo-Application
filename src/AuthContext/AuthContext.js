import { useContext, createContext, useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(true);

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

	const logOut = () => {
		setIsLoggedIn(false);
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log('User', user);
		});
		return () => {
			unsubscribe();
		};
	}, [user]);

	return (
		<AuthContext.Provider
			value={{ SignInWithGoogle, logOut, user, isLoggedIn, setIsLoggedIn }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
