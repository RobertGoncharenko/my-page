import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UserSearch from "./components/SearchUser";
import  ValidForm from './components/Validation'
import Navbar from './components/Navbar';
// import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <Navbar />
        </div>

      <div className='search'>
        <UserSearch />
      </div>
      
          
      {/* <ValidForm /> */}
      </div>  
    </div>
  );
}

export default App;
