import React, { useEffect, useState } from 'react'
import "./Todo.css"
import Addtask from "./Addtask"
import Listtask from './Listtask'

const Todo = () => {
    const [tasks,settasks] = useState([])
    useEffect(()=>{
      document.title=`You have ${tasks.length} tasks`
    })
    const addtask=(title)=>{
        const newtask=[...tasks,{title}]
        settasks(newtask)
    }
    const delItem = (index) =>{
      const newTask =[...tasks]
      newTask.splice(index,1)
      settasks(newTask)

    }
   
  return (
    <>
    <div className='todo-cont'>
        <div className='header text-warning' >TODO APP</div>
        <div className='add-task'>
        <Addtask addtask={addtask} />
        </div>
        <div className='tasks'>
            {tasks.map((task, index)=>(
                <Listtask key={index} index={index} task={task} delItem={delItem}/>


            )
        
        )}
        
        </div>



    </div>
    </>
  )
}

export default Todo