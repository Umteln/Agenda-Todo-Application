import React from 'react';
import { UserAuth } from '../AuthContext/AuthContext';
import Navbar from './Navbar';
import NewTaskContainer from './NewTaskContainer';
import TaskDisplayContainer from './TaskDisplayContainer';

const TasksContainer = ({ setIsLoggedIn }) => {
	const { isloggedIn } = UserAuth();
	return (
		<>
			<Navbar setIsLoggedIn={setIsLoggedIn} />
			<h1>Manage To Dos</h1>
			<NewTaskContainer />
			<TaskDisplayContainer />
		</>
	);
};

export default TasksContainer;
