import React, { useState, useEffect } from 'react';
import SubmitButton from './SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext/AuthContext';
import SignInWithGoogleButton from './SignInWithGoogleButton';
import { TextField, Typography } from '@mui/material';

const LoginContainer = () => {
	const { logIn, user } = UserAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { SignInWithGoogle, setIsLoggedIn, isLoggedIn } = UserAuth();

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/tasks');
		}
	}, [isLoggedIn, navigate]);

	const handleLogin = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await logIn(email, password);
			console.log(user);
			navigate('/tasks');
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			await SignInWithGoogle();
			setIsLoggedIn(true);
			localStorage.setItem('isLoggedIn', 'true');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='login-box'>
			<div className='login-title'>Login </div>
			<TextField
				fullWidth
				sx={{ m: '20px 0' }}
				type='text'
				label='Email'
				onChange={(e) => setEmail(e.target.value)}
				name='email'
			/>
			<TextField
				fullWidth
				type='password'
				label='Password'
				onChange={(e) => setPassword(e.target.value)}
				name='password'
			/>

			<SubmitButton
				handleSubmit={handleLogin}
				label='Submit'
			/>

			<SignInWithGoogleButton
				label='Login With Google'
				handleSubmit={handleGoogleSignIn}
			/>

			<Link to='/signup'>
				<Typography sx={{ mt: '10px', textAlign: 'center' }}>
					Create an account
				</Typography>
			</Link>
		</div>
	);
};

export default LoginContainer;
