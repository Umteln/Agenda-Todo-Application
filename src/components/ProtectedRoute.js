import React from 'react';
import { Outlet } from 'react-router-dom';
import { UserAuth } from '../AuthContext/AuthContext';
import LoginContainer from './LoginContainer';

function ProtectedRoutes({ isLoggedIn }) {
	const { user } = UserAuth();

	return user ? <Outlet /> : <LoginContainer />;
}

export default ProtectedRoutes;
