import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUsers = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3001/users/`+id)
        .then(res=>{
            console.log(res)
            setNewUser({...newUser, name: res.data.name, address: res.data.address, phonenum: res.data.phonenum})
        })
        .catch(err=>console.log(err))
    },[])
    const [newUser, setNewUser] = useState({
        name: '',
        address:'',
        phonenum: '',
      });
    const handleUpdate = (event) =>{
        event.preventDefault();
        axios.put('http://localhost:3001/users/'+id, newUser)
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3' >
      
        <div className='d-flex justify-content-between'>
        <h2>Update Users</h2>
        </div>
      <form onSubmit={handleUpdate}>
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
      <button className='btn btn-success my-2'>Submit</button>
      </form>  
      </div>
    </div>
  )
}

export default UpdateUsers