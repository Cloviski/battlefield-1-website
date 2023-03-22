import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact/contact';
import Photos from './pages/photos/photos';



function App() { 

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/photos' element={<Photos />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App; 

