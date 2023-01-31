import React, { useState } from 'react';
import SubmitButton from './SubmitButton';

import { Link } from 'react-router-dom';

import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLoggedInAtom, userStateAtom } from '../recoil/atoms';

import { auth } from '../firebase';
import { TextField } from '@mui/material';

const RegistrationContainer = () => {
	const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
	const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

	const [registerPassword, setRegisterPassword] = useState();
	const [registerEmail, setRegisterEmail] = useState();
	const [user, setUser] = useRecoilState(userStateAtom);

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});
	const handleRegistration = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			setIsLoggedIn(true);
			localStorage.setItem('isLoggedIn', 'true');
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	// useEffect(() => {
	// 	if (emailIsValid && passwordIsValid) {
	// 		setIsSubmitButtonDisabled(false);
	// 	} else {
	// 		setIsSubmitButtonDisabled(true);
	// 	}
	// }, [emailIsValid, passwordIsValid]);

	return (
		<div className='login-box'>
			<div className='login-title'>Register </div>
			<TextField
				fullWidth
				type='text'
				label='Email'
				onChange={(e) => setRegisterEmail(e.target.value)}
				name='username'
			/>
			<TextField
				fullWidth
				type='password'
				label='Password'
				onChange={(e) => setRegisterPassword(e.target.value)}
				name='password'
			/>
			<Link to='/tasks'>
				<SubmitButton handleSubmit={handleRegistration} />
			</Link>
		</div>
	);
};

export default RegistrationContainer;
