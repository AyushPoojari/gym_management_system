import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style/Login.css'

export  class Login extends Component {
  state = {
    username :'',
    password :''
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({
        [e.target.id]:e.target.value,
    })
  }

  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  
  render(){
    return (
  <>
      <h1>Login</h1>
      <div className="Login">
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
      </>
    )
  }
}

export default Login;
