import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ToDoList = () => {
 
  const [items, setItems] = useState([]); 
  const [newItem, setNewItem] = useState(''); 
  const [editIndex, setEditIndex] = useState(null); // 'editIndex' helps us track the task being edited.

  // This function is called when we want to add a new task to the list.
  const addItem = () => {
    if (newItem.trim() !== '') {
      if (editIndex !== null) {
        // If we're editing a task, we update it.
        const updatedItems = [...items];
        updatedItems[editIndex] = newItem;
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        // Otherwise, we add a new task to the list.
        setItems([...items, newItem]);
      }
      setNewItem(''); // Clear the input field after adding/updating.
    }
  };

  // This function deletes a task from the list.
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // This function allows us to edit a task.
  const editItem = (index) => {
    setNewItem(items[index]); // Populate the input with the task's text.
    setEditIndex(index); // Set the index of the task we are editing.
  };

  return (
    <div>
      <Link to="/"><button>Back</button></Link><br/><br/>
      <h1>ToDo List</h1>
      
      {/* Input to type new tasks */}
      <input 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={addItem}>{editIndex !== null ? 'Update' : 'Add'}</button>

      {/* Display the list of tasks */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button onClick={() => editItem(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
