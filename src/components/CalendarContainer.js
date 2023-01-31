import React from 'react';
import Navbar from './Navbar';
import EventCalendar from './EventCalendar';
import NewEventContainer from './NewEventContainer';

const CalendarContainer = () => {
	return (
		<>
			<Navbar />
			<h1>Calendar</h1>
			<NewEventContainer />
			<EventCalendar />
		</>
	);
};

export default CalendarContainer;
