import  { useEffect, useState } from 'react'
import {usersContext} from './usersContext';
function UserStore({children}) {
    let [users,setUsers]=useState([])
    async function get()
    {
        let res = await fetch('https://jsonplaceholder.typicode.com/users ');
        let userslist=await res.json()
        setUsers(userslist);

    }
    useEffect(()=>{get()},[])


  return (
    <usersContext.Provider value={{users,setUsers}}>
        {children}
    </usersContext.Provider>
  )
}

export default UserStore