import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Users() {
  let [users, setUsers] = useState([]);

  async function getUsers() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className='text-center mb-5 mt-5'>Users</h1>
      {
        users.map((userObj)=> (<p>
          <Link key={userObj.id}
           to={`/users/${userObj.id}`}  state={{user:userObj}}>{userObj.username} </Link>
          </p>))
      }
    </div>
  );
}

export default Users;