import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import TaskCard from './TaskCard';

const TaskDisplayContainer = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const getTasks = async () => {
      const tasksRef = collection(db, 'amera-tasks');
      const tempArray = [];
      const snapshot = await getDocs(tasksRef);
      snapshot.forEach((task) => {
        tempArray.push({ id: task.id, ...task.data() });
      });
      console.log(tempArray);
      setTasks(tempArray);
    };
    getTasks();
  }, []);

  return (
    <>
      {tasks &&
        tasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
          />
        ))}
    </>
  );
};

export default TaskDisplayContainer;
