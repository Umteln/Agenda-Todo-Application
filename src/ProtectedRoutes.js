import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LoginContainer from './components/LoginContainer';

function ProtectedRoutes({ isLoggedIn }) {
  const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    const loggedInCheck = localStorage.getItem('isLoggedIn');
    if (loggedInCheck === 'true') {
      setUserAuth(true);
    } else {
      setUserAuth(false);
    }
  }, []);

  return userAuth ? <Outlet /> : <LoginContainer />;
}

export default ProtectedRoutes;
