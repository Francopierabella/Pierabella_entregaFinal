import React, { useState } from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { MdDelete } from "react-icons/md";
import './TaskList.css'

const TaskList = ({tasks,deleteTask}) => {

  const [showDeleteTask,setShowDeleteTask] = useState(false)

  const showMessageDeleteTask = () => {
    setShowDeleteTask(true)
  }

  const dontShowMessageDeleteTask = () => {
    setShowDeleteTask(false)
  }
  
  return (
    <div className="container-tasks">
        <h1>Task List</h1>
        <ul className='List'>
          {tasks.length ===  0 && 'No Tasks'}
          {tasks.map(task => {
            return  <li key={task.id}>
             <TaskItem task={task}/>
             <button onClick={() => deleteTask(task.id)} onMouseOver={showMessageDeleteTask} onMouseOut={dontShowMessageDeleteTask} className='btn-Delete'><MdDelete /></button>
          </li>
          })}
          <span id='DeleteTask'>{tasks.length > 0 && showDeleteTask && 'Delete Task?' }</span>

        </ul>
      </div>
  )
}

export default TaskList