import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todos } from './components/Todos';
import 'boxicons';

function App() {
  return (
    <div className='h-screen flex justify-center items-start bg-gray-100'>
   <Todos/>
   </div>
  );
}

export default App;
