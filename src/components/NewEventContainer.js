import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import SubmitButton from './SubmitButton';
import { Paper, TextField } from '@mui/material';
import { useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../AuthContext/AuthContext';

const NewEventContainer = () => {
	const { user } = UserAuth();
	const [events, setEvents] = useState([]);

	const [newEvent, setNewEvent] = useState({
		title: '',
		start: '',
		end: '',
	});

	const handleAddEvent = async () => {
		
		const newEventRef = collection(db, 'users', `${user?.email}`, 'events');
		await addDoc(newEventRef, newEvent);

		setNewEvent('');
	};
	
	return (
		<>
			<Paper
				component='form'
				onSubmit={handleAddEvent}
				elevation={3}
				className='new-task-box'
			>
				<h2>Add New Event</h2>
				<div className='flex-container'>
					<div className='flex-item'>
						<TextField
							type='text'
							placeholder='Add title'
							className='input-field'
							value={newEvent.title}
							onChange={(e) =>
								setNewEvent({ ...newEvent, title: e.target.value })
							}
						/>
					</div>
				</div>

				<div className='flex-container'>
					<div className='flex-item'>
						<DatePicker
							placeholderText='Start Date'
							className='input-field'
							selected={newEvent.start}
							onChange={(start) => setNewEvent({ ...newEvent, start })}
						/>
					</div>

					<div className='flex-item'>
						<DatePicker
							placeholderText='End Date'
							className='input-field'
							selected={newEvent.end}
							onChange={(end) => setNewEvent({ ...newEvent, end })}
						/>
					</div>
				</div>

				<div className='flex-container'>
					<SubmitButton label='Add Event' />
				</div>
			</Paper>
		</>
	);
};

export default NewEventContainer;
