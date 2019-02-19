import React from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        var form = document.getElementById("signUp-form");
        const data = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            console.log(xhr.response);
        }
        xhr.open('POST', "http://localhost:8080/?type=signup",true);
        xhr.send(data);
        // this.props.history.push('/browse');
        
        return false;
    }
    
    render() {
        return (
            <div className="Main-Background">
                <h1 className="Main-Title m-0 pt-5">Boot Camp Review Site</h1>
                <h3 className="Main-subtitle py-5 m-0">Find A Coding Bootcamp Near You</h3>
                <form className="Main-login my-0 mx-auto" onSubmit={this.handleSubmit} id="signUp-form">
                    <div className="offset">
                        <p className="Main-Text pt-2 m-0">Get started!</p>
                        <label className="Main-Input-text m-0" htmlFor="user">Username</label>
                        <input className="Main-Input form-control my-0 mx-auto w-50" autoComplete="off" type="text" name="user"/>
                        <label className="Main-Input-text m-0" htmlFor="pass">Password</label>
                        <input className="Main-Input form-control my-0 mx-auto w-50" autoComplete="off" type="password" name="pass"/>
                        <button type="submit" className="Main-button btn btn-main mt-5 mb-0 mx-auto" aria-pressed="true"> Sign up</button>
                        <div className="Account mt-3 mx-5" style={{display: "flex", justifyContent: "space-between"}}>
                            <p className="Account-text">Already Have An Account?</p>
                            <Link to="/" className="Account-link">Login Here</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}