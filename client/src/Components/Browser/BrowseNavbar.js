import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/browse" className="nav-Dash mr-3" style={{display: this.props.display ? "initial": "none"}}>Browse</Link>
                        <Link to="/dashboard" className="nav-Dash mr-3">Dashboard</Link>
                        <div className="dropdown" id="nav-drop">
                            <div className="dropdown-toggle" data-toggle="dropdown" id="User-nav">User</div>
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