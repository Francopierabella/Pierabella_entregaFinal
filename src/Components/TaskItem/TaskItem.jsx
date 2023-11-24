import React,{useState, useTransition} from 'react'
import checkedLogo from './icons/checked.svg'
import noCheckedLogo from './icons/noCheck.svg'
import './TaskItem.css'

const TaskItem = ({task}) => {
    const [checked,setChecked] = useState(false)
    const handleChecked = () => {
        setChecked(!checked)
      }
    const [show,setShow] = useState(false)
    
    const showCheckTask = () => {
      setShow(true)
    }
    const dontShowCheckTask = () => {
      setShow(false)
    }
    const buttonClassName = checked ? 'check' : 'no-check'
  return (
    <>
      <div className='item'>
          <label>
              <button onClick={handleChecked} onMouseOver={checked ? dontShowCheckTask : showCheckTask} onMouseOut={dontShowCheckTask} className={buttonClassName}>
                {checked ? <img src={checkedLogo} alt='Checked logo' style={{width:'20px', height: '20px'}}/>: <img src={noCheckedLogo} alt='NoChecked logo' style={{width:'20px', height: '20px'}} />}
              </button>
              <span>{'Task: ' + task.title}</span>
          </label>
      </div>
      <span id='checktask' style={{color:'rgba(0,200,0)'}}>{show && 'Check Task?'}</span>
    </>  
  )
}

export default TaskItem