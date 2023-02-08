import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import EventCalendar from './EventCalendar';
import NewEventContainer from './NewEventContainer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../AuthContext/AuthContext';
import { useSetRecoilState } from 'recoil';
import { allEventsAtom } from '../recoil/atoms';

const CalendarContainer = () => {
	const setAllEvents = useSetRecoilState(allEventsAtom);
	const { user } = UserAuth();

	useEffect(() => {
		const getEvents = async () => {
			const EventsRef = collection(db, 'users', `${user?.email}`, 'events');
			const tempArray = [];
			const snapshot = await getDocs(EventsRef);
			snapshot.forEach((event) => {
				tempArray.push({ id: event.id, ...event.data() });
			});

			setAllEvents(tempArray);
		};
		getEvents();
	}, [user?.email, setAllEvents]);

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
