import React from 'react';
var logo = require('C:/Users/deathkiller101x/Desktop/Projects/Websites/BootCampReviewer/client/src/Img/LambdaIcon.png');
export default class CampPageLogo extends React.Component{
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
            </div>
        )
    }
}