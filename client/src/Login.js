import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';



class Login extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log("Login Mounted");
  }
  
  render() {
    return (
      <div className="Main-Background">
        <h1 className="Main-Title m-0 pt-5">Boot Camp Review Site</h1>
        <h3 className="Main-subtitle py-5 m-0">Find A Coding Bootcamp Near You</h3>
        <div className="Main-login my-0 mx-auto">
        
        </div>
      </div>
    );
  }
}

export default Login;