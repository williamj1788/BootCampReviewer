import React from 'react';
import { Route, Link } from 'react-router-dom';
export default class SignUp extends React.Component{
    componentDidMount(){
        console.log("Sign UP Mounted");
    }
    
    render(){
        return(
            <div>
              <h1 style={{color: "#FFFFFF"}}>Hello World Again!!!</h1>  
              <Link to="/">Login in</Link>
            </div>
        )
    }
}