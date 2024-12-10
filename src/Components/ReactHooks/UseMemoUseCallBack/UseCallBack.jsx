import React, { useCallback } from 'react'
import { useState } from 'react'
import List from './List'


const UseCallBack = () => {
    const[number,setNumber]=useState(2)
    const[dark,setDark]=useState(false)

 //  const getItems = () =>{
//
 //      return [number+1,number+2,number+3]
 //  }

 const getItems =useCallback((Increment)=>{
  setDark(false)
  console.log('theme')
   return [
     number+Increment+1,
     number+Increment+2, 
     number+Increment+3]
 },[number])
  
    const theme={
        backgroundColor : dark ? "black" : "white",
        color: dark ? "white" : "black",
    }
  return (
    <div style={theme}> 
        <input type="number" value={number} 
        onChange={(e)=>setNumber(parseInt(e.target.value))}/>
        <button onClick={()=>setDark(curr => !curr)}>ToggleTheme</button>
        <List  getItems={getItems}/>
    </div>
  )
}

export default UseCallBack									