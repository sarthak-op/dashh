import React from 'react';
import Dashboard from './Dashboard';
// import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Register from './Register';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';

function App() {
  return (
    <div className="App">
    
    


      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/Dashboard" element={<Dashboard/> }/>
      
        <Route path="/Register" element={<Register/> }/>
        <Route path="/Login" element={<Login/> }/>
   
       
      </Routes>
        
       
     
  
    </div>
  );
}

export default App;
