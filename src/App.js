import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App
