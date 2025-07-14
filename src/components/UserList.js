import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
const UserList = () => {
    const [data,setData] =useState([]);
     useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>(
        setData(data)
      ))
    },[]);
    console.log("what is come in data",data);
  return (
    <div> 
       <h1>User List</h1>
       {
        data && data.map((item,index)=>(
            <li key={index}><NavLink to={`/users/${item.id}`}>{item.name}</NavLink></li>
        )) 
       }
    </div>
  )
}

export default UserList