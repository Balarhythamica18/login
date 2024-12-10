// Main.js
import React, { createContext, useEffect, useState } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

// Create the context
export const ThemeContext = createContext();

const Main = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const[student,setStudent]=useState([
    {name:"kavi",age:21,gender:"female"},
    {name:"kavin",age:22,gender:"male"},
    { name: "ganga", age: 21, gender: "female" },
   
])
const[message,setmessage]=useState("Hello I am Main ")
 useEffect(() => {
    console.log("useEffect Affected");
    setCount(2);
  }, []);


  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, count,student,message }}>
      <Link to="/"><button>Back</button></Link>
      <br /><br />
      <button onClick={toggleTheme}>Toggle Theme</button>
      
      <h1>Main</h1>
      <Container />
    </ThemeContext.Provider>
  );
};

export default Main;
