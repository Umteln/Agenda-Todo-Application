import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext/AuthContext';

import { TextField, Typography } from '@mui/material';

const LoginContainer = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { user, logIn } = UserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await logIn(email, password);
			navigate('/tasks');
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	return (
		<div className='login-box'>
			<div className='login-title'>Login </div>
			{error ? <p>{error}</p> : null}
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
				handleSubmit={handleSubmit}
				label='Submit'
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
