import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SecretMessage() {
  const [showMessage, setShowMessage] = useState(false);  // Tracks if the message is shown

  const handleClick = () => {
    setShowMessage(!showMessage);  
  };

  return (
    <div>
       <Link to ="/Events"><button>Back</button></Link>
      <h1>Secret Message</h1>
      <button onClick={handleClick}>
        {showMessage ? 'Hide Secret' : 'Show Secret'}
      </button>
      {showMessage && <p>The secret message is: React is awesome!</p>}
    </div>
  );
}

export default SecretMessage;
