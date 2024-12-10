import React from 'react'
import User from './User'
import { useContext } from 'react';
import { ThemeContext } from './Main';

const Student = () => {
  const { student } = useContext(ThemeContext); 
  return (
    <div>
        <hr />
        <h1>Student</h1>
       {student.map((stud,index)=>(
        <div key={index}>
          <p>Name:{stud.name}</p>
          <p>Age:{stud.age}</p>
          <p>Gender:{stud.gender}</p>
          <hr/>
        </div>
       ))}
       
      
        <User />
    </div>
  )
}

export default Student