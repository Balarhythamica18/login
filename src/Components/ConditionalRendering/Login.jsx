import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login  () {
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleLogin=()=>{
        setIsLoggedIn(!isLoggedIn)
    }
    return (
        <div>
           <Link to ="/"><button>Back</button></Link>
          {isLoggedIn ? (
            <div>
              <h2>Welcome Back!</h2>
              <button onClick={toggleLogin}>Logout</button>
            </div>
        
          ) : (
            <div>
              <h2>Please Log In</h2>
              <button onClick={toggleLogin}>Login</button>
            </div>
          )}
        </div>
      );
    }

export default Login