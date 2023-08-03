import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Signin from "./components/Basics/Signin";
import Signup from './components/Basics/Signup';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="Register" element={<Signup />} />
        <Route path="Signin" element={<Signin />} />
      </Routes>
      
    </>
  );
    
   
  
}

export default App;
