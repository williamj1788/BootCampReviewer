import React from 'react';

export default class CampPageDescription extends React.Component{
    render(){
        return(
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
        )
    }
}