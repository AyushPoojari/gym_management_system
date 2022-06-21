import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationPane from './components/Navbar';
import Home from './Home';
import Gallery from './Gallery';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <NavigationPane/>
      <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/gallery' element = {<Gallery/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
