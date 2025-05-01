import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  

  return (
    <>
      <div>
        <Router>

          <NavBar/>

        </Router>
      </div>
    </>
  )
}

export default App
