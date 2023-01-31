import { dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';



export const locales = {
	'en-US': require('date-fns/locale/en-US'),
};
export const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});



export const blankNewTaskForm = {
	author: '',
	name: '',
	description: '',
	dueDate: '',
	priority: '',
	complete: false,
};

export const blankUser = {
	email: '',
	password: '',
};

export const events = [
	{
		title: 'Big Meeting',
		allDay: true,
		start: new Date(2023, 1, 1),
		end: new Date(2023, 1, 3),
	},
	{
		title: 'Vacation',
		start: new Date(2023, 1, 7),
		end: new Date(2023, 1, 10),
	},
	{
		title: 'Conference',
		start: new Date(2023, 1, 20),
		end: new Date(2023, 1, 23),
	},
];


