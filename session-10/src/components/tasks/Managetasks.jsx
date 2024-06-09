import React from 'react'
import Counttasks from './Counttasks';
import Addtasks from './Addtasks';
import Tasklists from  './Tasklists';
import {useState} from "react";
function Managetasks() {

    let[tasks,settasks]=useState([]);

  return (
    <div >
        <h2 className='text-primary mt-2 text-center'>Task Manager</h2>
            <div className='row mt-5'>
                <div className='col-sm-4 p-6'>
                    <Addtasks  data={{tasks,settasks}}/>
                </div>
                <div className='col-sm-4 p-6'>
                    <Tasklists tasks={tasks}/>
                </div>
                <div className='col-sm-4 p-6'>
                    <Counttasks tasks={tasks}/>
                </div>

            </div>
    </div>
  )
}

export default Managetasks