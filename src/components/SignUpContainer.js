import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext/AuthContext';
import SubmitButton from './SubmitButton';

const SignUpContainer = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { user, signUp } = UserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signUp(email, password);
			navigate('/tasks');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='login-box'>
			<div className='login-title'>Sign Up </div>
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
		</div>
	);
};

export default SignUpContainer;
