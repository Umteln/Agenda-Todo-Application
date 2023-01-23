import React, { useState, useEffect } from 'react';
import SubmitButton from './SubmitButton';
import Textfield from './Textfield';
import { Link } from 'react-router-dom';

const LoginContainer = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      setIsSubmitButtonDisabled(false);
    } else {
      setIsSubmitButtonDisabled(true);
    }
  }, [emailIsValid, passwordIsValid]);

  const handleSubmit = () => {
    console.log(user);
    setIsLoggedIn(true);

    localStorage.setItem('isLoggedIn', 'true');
  };

  const validateEmail = (user) => {
    if (user.includes('@')) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const validatePassword = (user) => {
    if (user.length >= 8) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  return (
    <div className='login-box'>
      <div className='login-title'>Login </div>
      <Textfield
        type='text'
        label='Email'
        setForm={setUser}
        form={user}
        name='username'
        handleValidation={validateEmail}
        isValid={emailIsValid}
      />
      <Textfield
        type='password'
        label='Password'
        setForm={setUser}
        form={user}
        name='password'
        handleValidation={validatePassword}
        isValid={passwordIsValid}
      />
      <Link to='/tasks'>
        <SubmitButton
          handleSubmit={handleSubmit}
          disabled={isSubmitButtonDisabled}
        />
      </Link>
    </div>
  );
};

export default LoginContainer;
