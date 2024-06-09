import  { useState, useEffect } from 'react';

function Userlist() {
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
      <h2 className='text-center mt-5'>List of Users</h2>
      <table className=' container table mt-5 table-bordered'>
        <thead className='table-dark'>
          <tr>
            <th>Username</th>
            <th>Date of Birth</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map(userObj => (
            <tr key={userObj.username}>
              <td>{userObj.username}</td>
              <td>{userObj.date}</td>
              <td>{userObj.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Userlist;