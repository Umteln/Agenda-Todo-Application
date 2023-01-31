import React, { useState, useEffect } from 'react';
import SubmitButton from './SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext/AuthContext';
import SignInWithGoogleButton from './SignInWithGoogleButton';
import { TextField, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const LoginContainer = () => {
	const navigate = useNavigate();

	// const [emailIsValid, setEmailIsValid] = useState();
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const { SignInWithGoogle, setIsLoggedIn, isLoggedIn } = UserAuth();
	const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
	const [loginPassword, setLoginPassword] = useState();
	const [loginEmail, setLoginEmail] = useState();

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/tasks');
		}
	}, [isLoggedIn, navigate]);

	const handleLogin = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
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

	// const validateEmail = (user) => {
	// 	if (user.includes('@')) {
	// 		setEmailIsValid(true);
	// 	} else {
	// 		setEmailIsValid(false);
	// 	}
	// };

	// const validatePassword = (user) => {
	// 	if (user.length >= 8) {
	// 		setPasswordIsValid(true);
	// 	} else {
	// 		setPasswordIsValid(false);
	// 	}
	// };

	const handleGoogleSignIn = async () => {
		try {
			await SignInWithGoogle();
			setIsLoggedIn(true);
			localStorage.setItem('isLoggedIn', 'true');
		} catch (error) {
			console.log(error);
		}
	};

	// const handleSubmit = async () => {
	// 	setUser(user);
	// 	setIsLoggedIn(true);
	// 	localStorage.setItem('username', user.username);

	// 	localStorage.setItem('isLoggedIn', 'true');
	// };

	return (
		<div className='login-box'>
			<div className='login-title'>Login </div>
			<TextField
				fullWidth
				sx={{ m: '20px 0' }}
				type='text'
				label='Email'
				onChange={(e) => setLoginEmail(e.target.value)}
				name='email'
			/>
			<TextField
				fullWidth
				type='password'
				label='Password'
				onChange={(e) => setLoginPassword(e.target.value)}
				name='password'
			/>

			<Link to='/tasks'>
				<SubmitButton
					handleSubmit={handleLogin}
					label='Submit'
				/>
			</Link>

			<Link to='/tasks'>
				<SignInWithGoogleButton
					label='Login With Google'
					handleSubmit={handleGoogleSignIn}
					disabled={isSubmitButtonDisabled}
				/>
			</Link>
			<Link to='/register'>
				<Typography sx={{ mt: '10px', textAlign: 'center' }}>
					Create an account
				</Typography>
			</Link>
		</div>
	);
};

export default LoginContainer;
