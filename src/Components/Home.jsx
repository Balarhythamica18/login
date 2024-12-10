import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
  return (
    <div>
      
        <Link to ="/props"><button>props</button></Link> <br/> <hr/>
        <Link to ="/conditionalRendering"><button>ConditionalRendering</button></Link><br/> <hr/>
        <Link to ="/Events"><button>React Events</button></Link><br /><hr/>
        <Link to ="/List"><button>React List</button></Link><br /><hr/> 
        <Link to ="/Form"><button>React Forms</button></Link>
        <hr/>
        <p className="hook">React Hooks</p> {/* Updated here */}
        <hr/><br/>
        <Link to='/useState'><button>useState</button></Link><br /> <hr />
        <Link to='/useEffect'><button>useEffect</button></Link><br /> <hr />
        <Link to='/useRef'><button>useRef</button></Link><br /> <hr />
        <Link to='/useContext'><button>UseContext</button></Link><br /> <hr />
        <Link to='/useReducer'><button>UseReducer</button></Link><br /> <hr />
        <Link to = '/MemoCallBack'>
          <button>UseMemoUseCallBack</button>
        </Link><br/><hr/>
        <Link to = '/UseLayoutEffect'>
          <button>UseLayoutEffect</button>
        
</Link><br/><hr/>
        
    </div>
  )
}

export default Home
