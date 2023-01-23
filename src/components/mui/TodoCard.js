import React, { useState } from 'react';
import { Paper, Button } from '@mui/material';
import { db } from '../../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const TodoCard = ({ task }) => {
  const [complete, setComplete] = useState(task.complete);

  const handleStatusChange = () => {
    const taskRef = doc(db, 'amera-tasks', task.id);
    updateDoc(taskRef, { complete: !complete });
    setComplete(!complete);
  };

  const handleTaskDelete = async (task) => {
    await deleteDoc(doc(db, 'amera-tasks', task.id));
  };

  return (
    <Paper
      component='div'
      elevation={3}
    >
      <div className={complete ? 'complete task-card' : 'task-card'}>
        <Button
          size='medium'
          variant='outlined'
          onClick={handleStatusChange}
        >
          {complete ? 'Mark Incomplete' : ' Mark Complete'}
        </Button>
        <div className='task-name-description'>
          <div className='task-name'>{task.name}</div>
          <div className='task-description'>{task.description}</div>
        </div>
        <div className='task-author'>
          <b>Owner:</b> : {task.author}
        </div>
        <div className='task-priority'>
          <b>Priority:</b> {task.priority}
        </div>
        <div className='task-dueDate'>
          <b>Date:</b>
          {task.dueDate}
        </div>
        <div>
          <Button
            size='medium'
            variant='outlined'
            onClick={handleTaskDelete}
            startIcon={<DeleteForeverIcon />}
          >
            Delete
          </Button>
        </div>
      </div>
    </Paper>
  );
};
