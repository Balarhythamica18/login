import React from 'react';
import { Link } from 'react-router-dom';

const Student = ({ students }) => {
  return (
    <div>
      <Link to ="/"><button>Back</button></Link><br/><br/>
      <h2>Student List</h2>
      {students.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>{student.isStudent ? "Is a Student" : "Not a Student"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Student;
