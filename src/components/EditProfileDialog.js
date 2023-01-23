import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Textfield from './Textfield';
import { TextField, Typography } from '@mui/material';

export default function EditProfileDialog({
  open,
  setOpen,
  currentUser,
  setCurrentUser,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const handleDescriptionChange = (e) => {
    setCurrentUser({ description: e.target.value });
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id='alert-dialog-title'>Edit Profile:</DialogTitle>
        <DialogContent>
          <Textfield
            label='name'
            type='text'
            setForm={setCurrentUser}
            form={currentUser}
            isValid={true}
            handleValidation={() => {}}
            name='name'
          />
          <Typography sx={{ mt: 2 }}> Description</Typography>
          <TextField
            value={currentUser.description}
            onChange={handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
