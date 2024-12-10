// User.js
import React, { useContext } from 'react';
import { ThemeContext } from './Main';

const User = () => {
  const { theme, count } = useContext(ThemeContext); 

  
  const textStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <div>
      <h1 style={textStyle}>User</h1>
      <p>Count from Main: {count}</p>
    </div>
  );
};

export default User;
