import React, { useState, useEffect } from 'react';
import LoginContainer from './components/LoginContainer';
import ProfileContainer from './components/ProfileContainer';
import TasksContainer from './components/TasksContainer';
import ProtectedRoutes from './ProtectedRoutes';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInCheck = localStorage.getItem('isLoggedIn');
    if (loggedInCheck === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<LoginContainer setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route element={<ProtectedRoutes />}>
            <Route
              path='/tasks'
              element={<TasksContainer />}
            />
            <Route
              path='/profile'
              element={<ProfileContainer />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
