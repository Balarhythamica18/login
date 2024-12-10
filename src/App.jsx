import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Student from './Components/Props/Student';
import Login from './Components/ConditionalRendering/Login';
import EventMain from './Components/Events/EventMain';
import LightSwitch from './Components/Events/LightSwitch';
import SecretMessage from './Components/Events/SecretMessage';
import ToDoList from './Components/List/ToDoList';
import EmployeeDetailsForm from './Components/Forms/EmployeeDetailsForm';
import Counter from './Components/ReactHooks/UseState/Counter';
import Clock from './Components/ReactHooks/UseEffect/Clock';
import Input from './Components/ReactHooks/UseRef/Input';

import Main from './Components/ReactHooks/UseContext/Main';
import { Top } from './Components/ReactHooks/UseMemoUseCallBack/Top';
import Reducer from './Components/ReactHooks/UseReducer/Reducer';
import MovingBox from './Components/ReactHooks/UseLayoutEffect/MovingBox';



const App = () => {
  const students = [
    { name: 'Riya', age: 21, isStudent: true },
    { name: 'John', age: 22, isStudent: true },
    { name: 'Mike', age: 20, isStudent: false }
  ];

  return (
    <BrowserRouter>
     <h1>React Js</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="props" element={<Student students={students} />} />
        <Route path="conditionalRendering" element={<Login />} />
        <Route path="Events" element={<EventMain />} />
        <Route path="Example1" element={<LightSwitch />} />
        <Route path="Example2" element={<SecretMessage />} />
        <Route path="List" element={<ToDoList />} />
        <Route path="Form" element={<EmployeeDetailsForm />} />
        <Route path="useState" element={<Counter />} />
        <Route path="useEffect" element={<Clock />} />
        <Route path="useRef" element={<Input />} />
        <Route path="useContext" element={<Main />} />
        <Route path="useReducer" element={<Reducer/>}/>
        
        <Route path="MemoCallBack" element={<Top />} />
        <Route path="UseLayoutEffect" element={<MovingBox />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
