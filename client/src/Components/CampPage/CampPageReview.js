import React from 'react';

export default class CampPageReview extends React.Component{
    render(){
        return(
            <div className="col-md-12 col-xl-6 pt-sm-5 pt-xl-0 order-3 order-md-3 order-xl-1 mb-5">
                <div className="CampPage-review mx-auto">
                    <h1 className="CampPage-card-title pt-3">Reviews</h1>
                    <textarea className="CampPage-review-info" readOnly></textarea>
                    <button type="button" className="btn btn-primary float-right" style={{position: "relative",right: "30px"}}>Add Review</button>
                </div>
            </div>
        )
    }
}