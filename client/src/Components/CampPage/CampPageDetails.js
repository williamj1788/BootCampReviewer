import React from 'react';

export default class CampPageDetails extends React.Component{
    render(){
        return(
            <div className="col-md-6 col-xl-3 pt-sm-5 pt-md-0 order-2 order-md-2 order-xl-1 ">
                <div className="CampPage-details mx-auto">
                    <h1 className="CampPage-card-title pt-3">Details</h1>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Rating:</span> 9 out of 10 (According to users)</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Cost:</span> {this.props.cost}</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Duration:</span> {this.props.duration} Weeks</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Job Placement Rate:</span>  {this.props.JPR * 100}% after 6 months</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Medium Income:</span> ${this.props.medium}</p>
                </div>
            </div>
        )
    }
}