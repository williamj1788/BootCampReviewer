import React from 'react';
import { Link } from 'react-router-dom';
export default class SignUp extends React.Component{
    onClick = () => {
        console.log("Clicked");
        this.props.history.push('/browse');
    }
    
    render() {
        return (
            <div className="Main-Background">
                <h1 className="Main-Title m-0 pt-5">Boot Camp Review Site</h1>
                <h3 className="Main-subtitle py-5 m-0">Find A Coding Bootcamp Near You</h3>
                <form className="Main-login my-0 mx-auto">
                    <div className="offset">
                        <p className="Main-Text pt-2 m-0">Get started!</p>
                        <label className="Main-Input-text m-0" for="user">Username</label>
                        <input className="Main-Input form-control my-0 mx-auto w-50" autoComplete="off" type="text" name="user"/>
                        <label className="Main-Input-text m-0" for="pass">Password</label>
                        <input className="Main-Input form-control my-0 mx-auto w-50" autocomplete="off" type="password" name="pass"/>
                        <button onClick={this.onClick} type="button" className="Main-button btn btn-main mt-5 mb-0 mx-auto" aria-pressed="true"> Sign up</button>
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