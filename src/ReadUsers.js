import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ReadUsers = () => {
    const {id} = useParams();
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/users/`+id)
        .then(res=>{
            console.log(res)
            setUsers(res.data);
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3' >
      
        <div className='d-flex flex-column '>
        <h2 className='p-2 text-center'>User Details</h2>
        <h3 className='p-2'>ID: {users.id}</h3>
        <h3 className='p-2'>Name: {users.name}</h3>
        <h3 className='p-2'>Email Id: {users.address}</h3>
        <h3 className='p-2'>Phone Number: {users.phonenum}</h3>
        </div>
        <Link to="/" className='btn btn-primary mx-2'>Back</Link>
        <Link to={`/edit/${users.id}`} className='btn btn-success mx-2'>Update</Link>
        </div>
        </div>
  )
}

export default ReadUsers