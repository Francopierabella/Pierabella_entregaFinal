import React , {useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import TaskList from '../TaskList/TaskList'
import './TaskForm.css'


const TaskForm = () => {
  const [newItem,setNewItem] = useState('')
  const [tasks,setTasks] = useState([])
  const [showMsjWarning,setShowMsjWarning] = useState(false)
  const deleteTask = (id) =>{
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id)
    })
  }

  const deleteAllTasks = () => {
      for(let i = 0; i < tasks.length; i++){
        deleteTask(tasks[i].id)
      }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setNewItem('')
    setTasks((currentTasks) => {
      return [
        ...currentTasks,{
          id: uuidv4(), 
          title : newItem, 
          
        }
      ]
    })
  }
   useEffect(() =>{
    if (tasks.length > 0){
      setShowMsjWarning(true)
    }
    else if (tasks.length == 0){
      setShowMsjWarning(false)
    }
  },[tasks])
  return (
    <>
        <form onSubmit={handleSubmit} className='form-container'>
            <div className="container">
                <label htmlFor="Task">New Task:</label>
                <input type="text"
                value={newItem} onChange={e => setNewItem(e.target.value)} id='Task' minLength={4} maxLength={30} />
            </div>
            <button className='btn-add'>Add Task</button>
            <button className='btn-delete-all' type='button' onClick={deleteAllTasks}>Delete All</button>
        </form>
        <TaskList tasks={tasks} deleteTask={deleteTask} />
        <span id='change'>{showMsjWarning && 'You are updating the TaskList...'}</span>
    </>
  )
}

export default TaskForm