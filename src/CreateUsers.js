import  { React, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: '',
    address: '',
    phonenum: 0
  },);
  const handleSubmit = async (e) => {
    axios.post('http://localhost:3001/users', newUser).then(response =>{
      setUsers([...users, response.data]);
      setNewUser({ name: '', address: '', phonenum: 0 });
      navigate('/');

    })
    .catch(err=>console.log(err))
  };
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3' >
      
        <div className='d-flex justify-content-between'>
        <h2>Create Users</h2>
        </div>
      <form onSubmit={handleSubmit}>
      <div className='mb-2'>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter Name...' className='form-control' value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}/>
      </div>
      <div className='ab-2'>
          <label htmlFor="">Address</label>
          <input type="text" placeholder='Enter Address...' className='form-control' 
          value={newUser.address} onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}/>
      </div>
      <div className='ab-2'>
          <label htmlFor="">Phone Number</label>
          <input type="text" placeholder='Enter Phone Number...' className='form-control' 
          value={newUser.phonenum} onChange={(e) => setNewUser({ ...newUser, phonenum: e.target.value })}/>
      </div>
      <Link to="/" className='btn btn-primary mx-2'>Back</Link>
      <button className='btn btn-success my-2'>Submit</button>
      </form>  
      </div>
    </div>

  )
}

export default CreateUsers