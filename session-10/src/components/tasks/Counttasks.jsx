import React from 'react'

function Counttasks(props) {
  return (
    <div>
        <h4 className='text-info '>Task Count</h4>
        <h3>{props.tasks.length}</h3>
    </div>
  )
}

export default Counttasks