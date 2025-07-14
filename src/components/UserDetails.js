import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const {id} = useParams();
  console.log("waht is come in id",id);
    const [item,setItem]=useState([]);
    useEffect(()=>{
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>res.json()).then(data=>(
        setItem(data)
     ))
    },[])
    console.log("what is come in item",item);
  return (
    <div>
        {
            item ? (
                <div>
                    <p>Name:{item.name}</p>
                    <p>Username:{item.username}</p>
                    <p>Email:{item.email}</p>
                    <p>Phone:{item.phone}</p>
                    <p>Website:{item.website}</p>
                </div>
            ):(<p>Loading...</p>)
        }
    </div>
  )
}

export default UserDetails