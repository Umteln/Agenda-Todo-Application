import React, { useState } from 'react';
import { db } from '../firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

const TaskCard = ({ task }) => {
  const [complete, setComplete] = useState(task.complete);

  const handleStatusChange = () => {
    const taskRef = doc(db, 'amera-tasks', task.id);
    updateDoc(taskRef, { complete: !complete });
    setComplete(!complete);
  };

  const handleDelete = async (id) => {
    const taskRef = doc(db, 'amera-tasks', task.id);
    await deleteDoc(taskRef);
  };
  return (
    <div className={complete ? 'complete task-card' : 'task-card'}>
      <div className='task-status'>
        <button onClick={handleStatusChange}>
          {complete ? 'Mark Incomplete' : ' Mark Complete'}
        </button>
      </div>
      <div className='task-status'>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </div>

      <div className='task-name-description'>
        <div className='task-name'>{task.name}</div>
        <div className='task-description'>{task.description}</div>
      </div>
      <div className='task-author'>
        <b>Owner:</b> {task.author}
      </div>
      <div className='task-priority'>
        <b>Owner:</b> {task.priority}
      </div>
      <div className='task-dueDate'>
        <b>Owner:</b> {task.dueDate}
      </div>
    </div>
  );
};

export default TaskCard;
