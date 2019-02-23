import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setUser } from './action';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { user: state.user };
}; 

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        res: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    var form = document.getElementById("Login-form");
    const data = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
        let res = xhr.response;
        if(res === 'not found'){
            this.setState({
                res: 'Username or Password is wrong'
            });
        }else{
            this.props.dispatch(setUser(res));
            localStorage.setItem('user',res);
            this.props.history.push('/browse');
        }
    }
    xhr.open('POST', "http://localhost:8080/?type=login",true);
    xhr.send(data);
    
    return false;
  }

  render() {
    return (
      <div className="Main-Background">
        <h1 className="Main-Title m-0 pt-5">Boot Camp Review Site</h1>
        <h3 className="Main-subtitle py-5 m-0">Find A Coding Bootcamp Near You</h3>
        <form className="Main-login my-0 mx-auto" onSubmit={this.handleSubmit} id="Login-form">
          <div className="offset">
            <p className="Main-Text pt-2 m-0">Welcome Back!</p>
            <label className="Main-Input-text m-0" htmlFor="user">Username</label>
            <input className="Main-Input form-control my-0 mx-auto w-50" type="text" name="loginUser"/>
            <label className="Main-Input-text m-0" htmlFor="pass">Password</label>
            <input className="Main-Input form-control my-0 mx-auto w-50" type="password" name="loginPass"/>
            <p className="Main-res" style={{display: this.state.res ? 'block': 'none'}}>{this.state.res}</p>
            <button type="submit" className="Main-button btn btn-main mt-5 mb-0 mx-auto" aria-pressed="true"> Login</button>
            <div className="Account mt-3 mx-5" style={{display: "flex", justifyContent: "space-between"}}>
              <p className="Account-text">Don't Have An Account?</p>
              <Link to="/SignUp" className="Account-link">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
Login = connect(mapStateToProps)(Login);
export default Login;