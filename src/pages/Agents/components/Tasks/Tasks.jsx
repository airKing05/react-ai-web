import React from 'react';
import "./Tasks.css";
import TaskCard from './components/TaskCard';

export default function Tasks() {
  return (
    <div className='tasks_container'>
      <div className='task__list'>
        <h5>To Do</h5>
        <TaskCard/>
        <TaskCard />
      </div>
      <div className='task__list'>
        <h5>In Progress</h5>
        <TaskCard />
      </div>
      <div className='task__list'>
        <h5>Done</h5>
        
      </div>
    </div>
  )
}
