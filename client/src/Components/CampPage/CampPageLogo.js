import React from 'react';

var logo = require('C:/Users/deathkiller101x/Desktop/Projects/Websites/BootCampReviewer/client/src/Img/LambdaIcon.png');

export default class CampPageLogo extends React.Component{
    
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-12 col-lg-10">
                        <img src={logo} alt="Bootcamp logo" className="CampPage-logo mx-auto pt-3"></img>
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