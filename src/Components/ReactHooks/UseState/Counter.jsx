import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Counter = () => {
    const[count,setCount]=useState(0);
    console.log('Current Count :',count);

    
  return (
    <div>
   <Link to ="/"><button>Back</button></Link><br/><br/>

        <h1>Counter : {count}</h1>      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter
