import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EmployeeDetailsForm() {
  
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  //  Handle change in input fields
  const handleNameChange = (event) => setName(event.target.value);
  const handleIdChange = (event) => setEmployeeId(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleDepartmentChange = (event) => setDepartment(event.target.value);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    console.log(`Employee Details:
      Name: ${name}
      Employee ID: ${employeeId}
      Email: ${email}
      Department: ${department}`);
    
  };

  return (
    <>
    <Link to ="/"><button>Back</button></Link><br/><br/>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Employee ID:</label>
        <input type="text" value={employeeId} onChange={handleIdChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Department:</label>
        <input type="text" value={department} onChange={handleDepartmentChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default EmployeeDetailsForm;
