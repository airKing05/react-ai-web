import React from 'react';
import "./Tasks.css";
import TaskCard from './components/TaskCard';
import { useState } from 'react';
import TaskCardPopup from './components/TaskCardPopup';

export default function Tasks() {
  const [showTaskCardPopup, setShowTaskCardPopup] = useState(false);

  const closeTaskCardPopup = () => {
    setShowTaskCardPopup(false)
  }
  const openTaskCardPopup = () => {
    setShowTaskCardPopup(true)
  }

  return (
    <>
      <div className='tasks_container'>
        <div className='task_list_category__container'>
          <div className='task__list'>
            <h5>To Do</h5>
            <TaskCard openTaskCardPopup={openTaskCardPopup}/>
            <TaskCard openTaskCardPopup={openTaskCardPopup}/>
          </div>
          <div className='task__list'>
            <h5>In Progress</h5>
            <TaskCard openTaskCardPopup={openTaskCardPopup}/>
          </div>
          <div className='task__list'>
            <h5>Done</h5>

          </div>
        </div>
      </div>

      <div className={`${showTaskCardPopup ? 'container_layover': ''}`}>
        
      </div>
      {
        showTaskCardPopup ? <TaskCardPopup closeTaskCardPopup={closeTaskCardPopup} /> : null
      }
    </>
   
  )
}
