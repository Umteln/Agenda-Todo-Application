import { atom } from 'recoil';
import { events } from '../libraries/util';

export const isLoggedInAtom = atom({
	key: 'isloggedIn',
	default: false,
});

export const currentUserAtom = atom({
	key: 'currentUser',
	default: null,
});

export const userStateAtom = atom({
	key: 'userStateAtom',
	default: {},
});
export const allEventsAtom = atom({
	key: 'allEventsAtom',
	default: events,
});

export const registerEmailAtom = atom({
	key: 'registerEmailAtom',
	default: false,
});
export const registerPasswordAtom = atom({
	key: 'registerPasswordAtom',
	default: false,
});
