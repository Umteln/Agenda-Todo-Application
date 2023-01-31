import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../AuthContext/AuthContext';

const Navbar = () => {
	const { user, logOut } = UserAuth();

	const handleLogOut = () => {
		logOut();
	};

	return (
		<nav>
			<Link
				to='/tasks'
				className='NavLink'
			>
				Manage To Do
			</Link>
			<Link
				to='/calendar'
				className='NavLink'
			>
				Calendar
			</Link>
			<Link
				to='/profile'
				className='NavLink'
			>
				Profile
			</Link>

			<button
				className='NavLink'
				onClick={handleLogOut}
			>
				Logout
			</button>
		</nav>
	);
};

export default Navbar;
