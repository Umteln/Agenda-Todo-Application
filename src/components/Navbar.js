import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);

    localStorage.setItem('isLoggedIn', 'false');
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
        to='/profile'
        className='NavLink'
      >
        Profile
      </Link>

      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
