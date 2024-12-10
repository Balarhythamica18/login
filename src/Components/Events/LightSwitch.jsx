import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);  
  };

  return (
    <div>
       <Link to ="/Events"><button>Back</button></Link>
      <h1>The light is {isOn ? 'ON' : 'OFF'}</h1>
      <button onClick={handleToggle}>Toggle Light</button>
    </div>
  );
}

export default LightSwitch;
