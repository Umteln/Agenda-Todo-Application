import React, { useState, useEffect } from 'react';
import { Paper, Container, Avatar, Typography, Button } from '@mui/material';
import EditProfileDialog from './EditProfileDialog';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoggedInAtom } from '../recoil/atoms';

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({
    name: 'Amera',
    description: 'I am a Software Developer',
  });

  const [open, setOpen] = useState(false);
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  useEffect(() => {
    setIsLoggedIn(true);
  }, []);
  console.log(isLoggedIn);
  const handleEdit = () => { 
    setOpen(true);
  };

  return (
    <>
      <Container
        maxWidth='md'
        sx={{
          mt: 4,
        }}
      >
        <Paper
          sx={{
            padding: 2,
          }}
        >
          <Avatar
            src='https://i.pravatar.cc/300'
            sx={{
              margin: '16px auto',
              width: 160,
              height: 160,
            }}
          />
          <Typography
            variant='h2'
            align='center'
          >
            {currentUser.name}
          </Typography>
          <Typography
            variant='body1'
            align='center'
          >
            {currentUser.description}
          </Typography>
          <Button
            onClick={handleEdit}
            variant='outlined'
            sx={{
              display: 'block',
              margin: '16px auto',
            }}
          >
            Edit
          </Button>
        </Paper>
      </Container>
      <EditProfileDialog
        open={open}
        setOpen={setOpen}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />
    </>
  );
};

export default Profile;
