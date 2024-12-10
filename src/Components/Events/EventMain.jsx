import React from 'react'
import { Link } from 'react-router-dom'

const EventMain = () => {
  return (
    <div>
        <Link to ="/"><button>Back</button></Link>
        <h1>Example of Events</h1>
       
       <Link to ="/Example1"><button>Example1-LightSwitch</button></Link> <br />
        <Link to="/Example2"><button>Example2 - SecretMessage</button></Link>
        
    </div>
  )
}

export default EventMain