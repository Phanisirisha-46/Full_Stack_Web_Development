import  { useState, useEffect } from 'react';

function Registereduser() {
  const [usersList, setUsersList] = useState([]);

  async function getUsers() {
    try {
      let res = await fetch('http://localhost:3000/users', { method: 'GET' });
      let users = await res.json();
      setUsersList(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  
  return (
    <div>
      <h2 className='text-center mt-5'>Registered Users</h2>
      <table className=' container table mt-5 table-bordered'>
        <thead className='table-dark'>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map(userObj => (
            <tr key={userObj.username}>
              <td>{userObj.username}</td>
              <td>{userObj.password}</td>
              <td>{userObj.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Registereduser;