import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function MovingBox() {
  const boxRef = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const box = boxRef.current;
    const updatePosition = () => {
      if (position < 300) { 
        setPosition((prev) => prev + 10);
      }
    };
    const animation = setInterval(updatePosition, 16); 
    console.log('Box position:', position); 
    return () =>{
       clearInterval(animation);
    }
  }, [position]); 

  

  return (
    <div>
        <Link to ="/"><button>Back</button></Link><br/><br/>
      <div
        ref={boxRef}
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
          transform: `translateX(${position}px)`,
          transition: 'transform 0.1s',
        }}
      />
    </div>
  );
}

export default MovingBox;
