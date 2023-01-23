import React, { useState, useEffect } from 'react';
import SubmitButton from './SubmitButton';
import Textfield from './Textfield';
import { Paper } from '@mui/material';

const EditProfile = ({ currentUser, setCurrent }) => {
  const [profile, setNewProfile] = useState({
    profileName: '',
    newDescription: '',
  });

  const handleSubmit = () => {};

  const [nameIsValid, setNameIsValid] = useState(false);
  const [descriptionIsValid, setDescriptionIsValid] = useState(false);

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (nameIsValid && descriptionIsValid) {
      setIsSubmitButtonDisabled(false);
    } else {
      setIsSubmitButtonDisabled(true);
    }
  }, [nameIsValid, descriptionIsValid]);

  const validateName = (name) => {
    if (name.length >= 1) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
  };

  const validateDescription = (description) => {
    if (description.length >= 1) {
      setDescriptionIsValid(true);
    } else {
      setDescriptionIsValid(false);
    }
  };

  return (
    <Paper
      elevation={3}
      className='new-task-box'
    >
      <div className='flex-container'>
        <div className='flex-item '>
          <Textfield
            label='Name'
            type='text'
            name='name'
            form={profile}
            setForm={setNewProfile}
            handleValidation={validateName}
            isValid={nameIsValid}
          />
        </div>

        <div className='flex-item'>
          <Textfield
            label='Description'
            type='text'
            name='description'
            form={profile}
            setForm={setNewProfile}
            handleValidation={validateDescription}
            isValid={descriptionIsValid}
          />
        </div>
      </div>
      <div className='flex-container'>
        <SubmitButton
          handleSubmit={handleSubmit}
          disabled={isSubmitButtonDisabled}
        />
      </div>
    </Paper>
  );
};

export default EditProfile;
