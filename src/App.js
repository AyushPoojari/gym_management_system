import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationPane from './components/Navbar';
import Home from './Home';
import Gallery from './Gallery';
import Login from './Login';
import SignUp from './SignUp';
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
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/signup' element = {<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
