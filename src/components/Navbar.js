import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
	const { logOut } = UserAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logOut();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
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
				onClick={handleLogout}
			>
				Logout
			</button>
		</nav>
	);
};

export default Navbar;
