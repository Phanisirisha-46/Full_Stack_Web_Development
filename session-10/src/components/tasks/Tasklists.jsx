
import React from 'react'

function TasksList(props) {
  return (
    <div>
         <h2 className='text-info'>List of Tasks</h2>
         {
            props.tasks.map(task=><p className='fs-1' key={task}>{task}</p>)
         }
    </div>
  )
}

export default TasksList;