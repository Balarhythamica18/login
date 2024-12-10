import React from 'react'
import UseMemo from './UseMemo'
import UseCallBack from './UseCallBack'
import { Link } from 'react-router-dom'

export const Top = () => {
  return (
    <div>
         <Link to ="/"><button>Back</button></Link><br/><br/>
        <h1>UseMemo</h1>
        <UseMemo />
        <h1>UseCallBack</h1>
        <UseCallBack />
    </div>
  )
}
