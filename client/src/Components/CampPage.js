import React from 'react';

var logo = require('C:/Users/deathkiller101x/Desktop/Projects/Websites/BootCampReviewer/client/src/Img/LambdaIcon.png');
var buttonContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexShrink: 4,
    flexGrow: 4,
}

export default class CampPage extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.props.history.push("/browse");
    }
    
    render(){
        return(
            <div>
                <div className="offset">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-lg-10">
                                <img src={logo} className="CampPage-logo mx-auto pt-3"></img>
                            </div>
                            <div className="col-sm-12 col-lg-2 py-lg-5">
                                <button className="CampPage-nav-btn btn" onClick={this.onClick}>Browse</button>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-12">
                                <p className="CampPage-mission m-auto">A Revolutionary New School That Invests in You</p>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-6 col-xl-3 pt-sm-5 pt-md-0 order-1 order-md-1 order-xl-1">
                                <div className="CampPage-description mx-auto">
                                a
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-6 pt-sm-5 pt-xl-0 order-3 order-md-3 order-xl-1 mb-5">
                                <div className="CampPage-review mx-auto">
                                a
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 pt-sm-5 pt-md-0 order-2 order-md-2 order-xl-1 ">
                                <div className="CampPage-details mx-auto">
                                a
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}