import React, { useState, useEffect } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { allEventsAtom } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';

const locales = {
	'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

const EventCalendar = () => {
	const allEvents = useRecoilValue(allEventsAtom);

	return (
		<>
			<Calendar
				localizer={localizer}
				events={allEvents}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 500, margin: '50px' }}
			/>
		</>
	);
};

export default EventCalendar;
