import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationPane from './components/Navbar';
import LoginCard from './components/LoginCard';
import SignUpCard from './components/SignUpCard';
import "./style/App.css"

function App() {
  return (
    <>
    <NavigationPane/>
    <div className='centerContent'>
    <LoginCard/>
    <SignUpCard/>
    </div>
    </>
  );
}

export default App;
