import React, { useCallback, useMemo, useState } from 'react'

const UseMemo = () => {
    const[number,setnumber]=useState(0)
    const[dark,setdark]=useState(false)
  
   const doubleNumber = slowFunction(number)

   //const doubleNumber=useMemo(()=>{
   // return slowFunction(number)
   //},[number])


 //  const themestyles ={
 //      backgroundColor : dark ? "black" : "white",
 //      color: dark ? "white" : "black",
 //      
 //  }
  

 const themestyles=useMemo(()=>{
    console.log("ThemeRendered")
    return{
        backgroundColor : dark ? "black" :"white",
        color: dark ? "white" : "black"
    } 
 },[dark])

 function slowFunction(num){
        console.log("running slow function")
        for (let i=0; i<1000000000; i++){}
        return num*2;
    }

  return (
    <div>
      <input type="text" value={number} onChange={(e)=>setnumber(e.target.value)} />
      <button onClick={()=>setdark((curr) =>!curr)}>ChangeTheme</button>
      <p style={themestyles}>{doubleNumber}</p>
    </div>
  )
}

export default UseMemo