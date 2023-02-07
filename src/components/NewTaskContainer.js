import React, { useState, useEffect } from 'react';
import SubmitButton from './SubmitButton';
import Textfield from './Textfield';
import { db } from '../firebase';
import { addDoc, collection, doc } from 'firebase/firestore';
import { blankNewTaskForm } from '../libraries/util';
import { Paper } from '@mui/material';
import { UserAuth } from '../AuthContext/AuthContext';

const NewTaskContainer = () => {
	const { user } = UserAuth;
	console.log(user);

	const [newTaskForm, setNewTaskForm] = useState(blankNewTaskForm);

	const handleSubmit = async () => {
		const newTaskRef = doc(collection(db, 'users', `${user?.email}`, 'tasks'));
		await addDoc(newTaskRef, newTaskForm);
		setNewTaskForm(blankNewTaskForm);
	};

	const [usernameIsValid, setUsernameIsValid] = useState(false);
	const [taskNameIsValid, setTaskNameIsValid] = useState(false);
	const [taskDescriptionIsValid, setTaskDescriptionIsValid] = useState(false);
	const [dueDateIsValid, setDueDateIsValid] = useState(false);
	const [priorityIsValid, setPriorityIsValid] = useState(false);

	const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

	useEffect(() => {
		if (
			usernameIsValid &&
			taskNameIsValid &&
			taskDescriptionIsValid &&
			priorityIsValid &&
			dueDateIsValid
		) {
			setIsSubmitButtonDisabled(false);
		} else {
			setIsSubmitButtonDisabled(true);
		}
	}, [
		usernameIsValid,
		taskNameIsValid,
		taskDescriptionIsValid,
		priorityIsValid,
		dueDateIsValid,
	]);

	const validateUsername = (username) => {
		if (username.length >= 1) {
			setUsernameIsValid(true);
		} else {
			setUsernameIsValid(false);
		}
	};

	const validateTaskName = (task) => {
		if (task.length >= 1) {
			setTaskNameIsValid(true);
		} else {
			setTaskNameIsValid(false);
		}
	};
	const validateTaskDescription = (description) => {
		if (description.length >= 1) {
			setTaskDescriptionIsValid(true);
		} else {
			setTaskDescriptionIsValid(false);
		}
	};
	const validateDueDate = (date) => {
		if (date.length >= 1) {
			setDueDateIsValid(true);
		} else {
			setDueDateIsValid(false);
		}
	};
	const validatePriority = (priority) => {
		if (priority.length >= 1) {
			setPriorityIsValid(true);
		} else {
			setPriorityIsValid(false);
		}
	};

	return (
		<Paper
			elevation={3}
			className='new-task-box'
		>
			<h2>Create New Task</h2>
			<div className='flex-container'>
				<div className='flex-item '>
					<Textfield
						label='Username'
						type='text'
						name='author'
						form={newTaskForm}
						setForm={setNewTaskForm}
						handleValidation={validateUsername}
						isValid={usernameIsValid}
					/>
				</div>
				<div className='flex-item'>
					<Textfield
						label='Task Name'
						type='text'
						name='name'
						form={newTaskForm}
						setForm={setNewTaskForm}
						handleValidation={validateTaskName}
						isValid={taskNameIsValid}
					/>
				</div>
			</div>
			<div className='flex-container'>
				<div className='flex-item'>
					<Textfield
						label='Task Description'
						type='text'
						name='description'
						form={newTaskForm}
						setForm={setNewTaskForm}
						handleValidation={validateTaskDescription}
						isValid={taskDescriptionIsValid}
					/>
				</div>
			</div>
			<div className='flex-container'>
				<div className='flex-item'>
					<Textfield
						label='Due Date'
						type='date'
						name='dueDate'
						form={newTaskForm}
						setForm={setNewTaskForm}
						handleValidation={validateDueDate}
						isValid={dueDateIsValid}
					/>
				</div>
				<div className='flex-item'>
					<Textfield
						label='Priority'
						type='text'
						name='priority'
						form={newTaskForm}
						setForm={setNewTaskForm}
						handleValidation={validatePriority}
						isValid={priorityIsValid}
					/>
				</div>
			</div>
			<div className='flex-container'>
				<SubmitButton
					label='Submit'
					handleSubmit={handleSubmit}
					disabled={isSubmitButtonDisabled}
				/>
			</div>
		</Paper>
	);
};

export default NewTaskContainer;
