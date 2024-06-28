import React from 'react'

const Listtask = ({task, delItem, index}) => {

  
  return (
    <>
    <div className='lst'>
        {task.title}
        <button className='delb' onClick={ ()=>{delItem(index)} }>Delete</button>
   

    </div>


    </>
  )
}

export default Listtask