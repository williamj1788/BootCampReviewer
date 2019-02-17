import React from 'react';
import { Route, Link } from 'react-router-dom';

var navbarContent1 = {
    display: "flex", 
    justifyContent: "space-between",
    width: "100%",
    padding: "0 50px"
}

var navbarContent2 = {
    display: "flex", 
    justifyContent: "space-between", 
    width: "400px",
    marginRight: "50px"
 
}



export default class BrowseNavbar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg navbar-dark bg-main">
                <div style={navbarContent1}>
                    <Link to="/" className="navbar-brand" id="Brand">BootCampReviewer</Link>
                    <div style={navbarContent2}>
                        <Link to="/dashboard" className="nav-Dash">Dashboard</Link>
                        <div className="dropdown" id="nav-drop">
                            <a className="dropdown-toggle" data-toggle="dropdown" id="User-nav">User</a>
                            <div className="dropdown-menu">
                                <Link to="/" className="dropdown-item">Sign out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}