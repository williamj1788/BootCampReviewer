import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { setUser } from './action';

const mapStateToProps = state => {
    return { user: state.user };
}; 

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            res: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        var form = document.getElementById("signUp-form");
        const data = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            let res = xhr.response;
            if(res === 'Taken'){
                this.setState({
                    res: 'Username has already been taken'
                });
            }else{
                this.props.dispatch(setUser(res));
                localStorage.setItem('user',res);
                this.props.history.push('/browse');
            }
        }
        xhr.open('POST', "http://localhost:8080/?type=signup",true);
        xhr.send(data);
        
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
                        <label className="Main-Input-text m-0" htmlFor="signupUser">Username</label>
                        <input className="Main-Input form-control my-0 mx-auto w-50" autoComplete="off" type="text" name="signupUser" minLength="8" required/>
                        <label className="Main-Input-text m-0" htmlFor="signupPass">Password</label>
                        <input className="Main-Input form-control my-0 mx-auto w-50" autoComplete="off" type="password" name="signupPass" minLength="8" required/>
                        <p className="Main-res" style={{display: this.state.res ? 'block': 'none'}}>{this.state.res}</p>
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
SignUp = connect(mapStateToProps)(SignUp)
export default SignUp;