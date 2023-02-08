import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import TaskCard from './TaskCard';
import { UserAuth } from '../AuthContext/AuthContext';

const TaskDisplayContainer = () => {
	const { user } = UserAuth();
	const [tasks, setTasks] = useState();

	useEffect(() => {
		const getTasks = async () => {
			const tasksRef = collection(db, 'users', `${user?.email}`, 'tasks');
			const tempArray = [];
			const snapshot = await getDocs(tasksRef);
			snapshot.forEach((task) => {
				tempArray.push({ id: task.id, ...task.data() });
			});

			setTasks(tempArray);
		};
		getTasks();
	}, []);

	return (
		<>
			{tasks &&
				tasks.map((task) => (
					<TaskCard
						task={task}
						key={task.id}
					/>
				))}
		</>
	);
};

export default TaskDisplayContainer;
