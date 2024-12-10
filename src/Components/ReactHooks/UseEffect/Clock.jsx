import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Clock = () => {
  const [time,setTime]= useState(new Date().toLocaleTimeString());


 

    useEffect(()=>{
        console.log("useEffect is running!!");
        const timer=setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);

        return()=>{ 
            console.log("cleaning up...")
            clearInterval(timer);
        };
    },[]); 

  return (
    <div>
        <Link to ="/"><button>Back</button></Link><br/><br/>
          <h1>Current Time : </h1>
          <p>{time}</p> 
        
         
    </div>
  )

  /* const[num1,setnum1]=useState(100)
    console.log(num1)

    useEffect(()=>{
      console.log("from useEffect")
      setnum1(200)

      return()=>{
        setnum1(100)
        console.log("Cleaning Memory")
        }
    },[])

    return(
      <>
        <h1>{num1}</h1>
        <button onClick={()=>setnum1((e)=>e+1)}>Add</button>
      </>
    )*/
}

export default Clock