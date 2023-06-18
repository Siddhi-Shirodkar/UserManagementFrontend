import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/users/${userId}`);
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (  
    <div className='d-flex vh-100 justify-content-center align-items-center'  style={{ backgroundColor: '#adb5bd' }}>
      <div className='w-70 bg-white rounded p-3' >
      
        <div className='d-flex justify-content-between'>
        <h2>List of Users</h2>
          <Link to="/create" className='btn btn-warning mx-5 my-2'>Create</Link>
        </div>
        
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => {
            return <tr key={user.id} >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.phonenum}</td>
              <td>
              <Link to={`/read/${user.id}`} className='btn bt-sm btn-info mx-2'>Read</Link>
              <Link to={`/edit/${user.id}`} className='btn btn-success mx-2'>Update</Link>
                <button onClick={() => deleteUser(user.id)} className='btn bt-sm btn-danger'>Delete</button>
              </td>
            </tr>
          })}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default Home;
