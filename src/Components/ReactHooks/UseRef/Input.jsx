import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Input() {
  const[name,setName]=useState()
  console.log(name)
  // create ref
  const nameInputRef = useRef(null);
  // store the i/p value
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    // Getting the i/p value from the ref
    const enteredName = nameInputRef.current.value;
    console.log("User entered:", enteredName);
    
    setInputValue(enteredName);

    // Focusing back on the input field after clicking the button
    nameInputRef.current.focus();
  };

  return (
    <div>
       <Link to ="/"><button>Back</button></Link><br/><br/>
      <h1>Using UseState</h1><br />
      <h4>Enter Your Name</h4>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      {name && <p>Your entered name: {name}</p>}
      <br />
      <hr/>
      <h1>Using UseRef</h1>
      <h4>Enter Your Name</h4>
      {/* Connecting the ref to the input element */}
      <input ref={nameInputRef} type="text" placeholder="Your name" />
      <button onClick={handleClick}>Submit Name</button>

      {/* Displaying the entered value below */}
      {inputValue && <p>Your entered name: {inputValue}</p>}
    </div>
  );
}

export default Input;
