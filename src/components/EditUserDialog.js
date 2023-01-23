import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import EditProfile from './EditProfile';

//NOT ACTIVELY USED IN PROJECT//

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{ m: 0, p: 2 }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function EditUserDialog({
  open,
  setOpen,
  setCurrentUser,
  currentUser,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          Edit Profile:
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <EditProfile />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
