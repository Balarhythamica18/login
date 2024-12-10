import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';


function formReducer(state, action) {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.payload };
    case 'updateEmail':
      return { ...state, email: action.payload };
    case 'updatePhonenumber':
      return {...state, Phonenumber: action.payload};
    case 'reset':
      return { name: '', email: '',Phonenumber:'' }; 
    default:
      return state;
  }
}

const Reducer = () => {
  
  const [state, dispatch] = useReducer(formReducer, { name: '', email: '',Phonenumber:'' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User Details Submitted:', state); 
    dispatch({ type: 'reset' }); 
  };

  return (
    <div>
       <Link to ="/"><button>Back</button></Link><br/><br/>
      <h2>User Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: 'updateName', payload: e.target.value })}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'updateEmail', payload: e.target.value })}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>PhoneNumber:</label>
          <input
            type="text"
            value={state.Phonenumber}
            onChange={(e) => dispatch({ type: 'updatePhonenumber', payload: e.target.value })}
            placeholder="Enter your phonenumber"
          />
        </div>
        
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </form>
      <h3>Current Form State:</h3>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>PhoneNumber: {state.Phonenumber}</p>
    </div>
  );

};

export default Reducer;
