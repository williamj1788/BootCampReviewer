import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { 
        cost: state.campInfo.cost, 
        duration: state.campInfo.duration, 
        JPR: state.campInfo.JPR, 
        medium: state.campInfo.medium,
        reviews: state.campInfo.reviews,
        c: state.campInfo,
    };
}; 

class CampPageDetails extends React.Component{
    
    render(){
        let ratingText = 'No Reviews';
        if(this.props.reviews){
            let rating = this.props.reviews.reduce((acc, review) => {return acc + review.rating},0) / this.props.reviews.length;
            rating = Math.floor(rating * 100) / 100;
            ratingText = ` ${rating}/10`
        }
        return(
            <div className="col-md-6 col-xl-3 pt-sm-5 pt-md-0 order-2 order-md-2 order-xl-1 ">
                <div className="CampPage-details mx-auto">
                    <h1 className="CampPage-card-title pt-3">Details</h1>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Rating:</span>{ratingText}</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Cost:</span> {this.props.cost}</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Duration:</span> {this.props.duration} Weeks</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Job Placement Rate:</span>  {this.props.JPR * 100}% after 6 months</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Medium Income:</span> ${this.props.medium}</p>
                </div>
            </div>
        )
    }
}
CampPageDetails = connect(mapStateToProps)(CampPageDetails);
export default CampPageDetails;