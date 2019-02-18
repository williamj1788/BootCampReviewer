import React from 'react';

var logo = require('C:/Users/deathkiller101x/Desktop/Projects/Websites/BootCampReviewer/client/src/Img/LambdaIcon.png');

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
                                    <h1 className="CampPage-card-title pt-3">Description</h1>
                                    <p className="CampPage-description-info">
                                    Lambda School is a 30 week, immersive 
                                    program that gives you the tools and 
                                    training you need to launch your new 
                                    career—from the comfort of your own 
                                    home.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-6 pt-sm-5 pt-xl-0 order-3 order-md-3 order-xl-1 mb-5">
                                <div className="CampPage-review mx-auto">
                                    <h1 className="CampPage-card-title pt-3">Reviews</h1>
                                    <textarea className="CampPage-review-info" readOnly></textarea>
                                    <button type="button" className="btn btn-primary float-right" style={{position: "relative",right: "30px"}}>Add Review</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 pt-sm-5 pt-md-0 order-2 order-md-2 order-xl-1 ">
                                <div className="CampPage-details mx-auto">
                                    <h1 className="CampPage-card-title pt-3">Details</h1>
                                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Rating:</span> 9 out of 10 (According to users)</p>
                                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Cost:</span> 17% of income for the first 2 years if you get a job making 50k or more. Or 20k up front</p>
                                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Duration:</span> 30 Weeks</p>
                                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Job Placement Rate:</span>  83% after 6 months</p>
                                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Medium Income:</span> 70,000k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer"></div>
                </div>
            </div>
        )
    }
}