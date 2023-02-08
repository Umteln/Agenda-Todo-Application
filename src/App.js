import React, { useState, useEffect } from 'react';
import './App.css';
import LoginContainer from './components/LoginContainer';
import ProfileContainer from './components/ProfileContainer';
import TasksContainer from './components/TasksContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import CalendarContainer from './components/CalendarContainer';
import { AuthContextProvider } from './AuthContext/AuthContext';
import SignUpContainer from './components/SignUpContainer';
import ProtectedRoutes from './components/ProtectedRoute';

function App() {
	return (
		<RecoilRoot>
			<AuthContextProvider>
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={<LoginContainer />}
						/>
						<Route
							path='/signup'
							element={<SignUpContainer />}
						/>
						<Route element={<ProtectedRoutes />}>
							<Route
								path='/tasks'
								element={<TasksContainer />}
							/>
							<Route
								path='/calendar'
								element={<CalendarContainer />}
							/>
							<Route
								path='/profile'
								element={<ProfileContainer />}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthContextProvider>
		</RecoilRoot>
	);
}

export default App;
