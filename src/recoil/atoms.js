import { atom } from 'recoil';

export const isLoggedInAtom = atom({
  key: 'isloggedIn',
  default: false,
});
