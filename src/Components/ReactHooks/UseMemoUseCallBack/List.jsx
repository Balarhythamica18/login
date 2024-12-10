import React, { useState, useEffect } from 'react';

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(2));
    console.log('setting items');
  }, [getItems]);

  return (
    <div>
      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
};

export default List;
