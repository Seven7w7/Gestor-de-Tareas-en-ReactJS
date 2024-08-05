import React, { useContext, useEffect } from 'react';
import './infoTasks.css';
import { taskContext } from '../../Context/Context';

export const InfoTasks = () => {
  const context = useContext(taskContext);

  useEffect(() => {
    const pending = context.tasks.filter(task => !task.status);
    const done = context.tasks.filter(task => task.status);

    context.setPendingTasks(pending.length);
    context.setDoneTasks(done.length);
  }, [context.tasks]);

  return (
    <>
      <h2 className='info-tasks'>
        Usted tiene <span className='task-pending'>{context.pendingTasks}</span> pendientes y <span className='task-done'>{context.doneTasks}</span> terminadas
      </h2>
      <hr />
    </>
  );
};
