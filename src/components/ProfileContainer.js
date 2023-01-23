import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';

const ProfileContainer = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Profile />
    </div>
  );
};

export default ProfileContainer;
