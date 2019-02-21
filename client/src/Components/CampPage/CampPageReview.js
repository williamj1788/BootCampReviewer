import React from 'react';
import CampPageAddReview from './CampPageAddReview';

export default class CampPageReview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showAddReview: false
        }
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(){
        this.setState({
            showAddReview: this.state.showAddReview ? false : true
        });
    }
    
    render(){
        let reviews = this.props.reviews;
        let reviewsText = '';
        if(reviews){
            // console.log(reviews);
            reviewsText = reviews.reduce((acc, review) =>{
                return acc + review.by + '\nRating: ' + review.rating + '\n' + review.reviewDescription + '\n\n';
            },'');
        }
        return(
            <div className="col-md-12 col-xl-6 pt-sm-5 pt-xl-0 order-3 order-md-3 order-xl-1 mb-5">
                <div className="CampPage-review mx-auto">
                    <h1 className="CampPage-card-title pt-3">Reviews</h1>
                    <textarea className="CampPage-review-info" value={reviewsText} readOnly></textarea>
                    <button onClick={this.onClick} type="button" className="btn btn-primary float-right" style={{position: "relative",right: "30px"}}>Show Review Tab</button>
                </div>
                <CampPageAddReview id={this.props.id} show={this.state.showAddReview} showToggle={this.onClick} getInfo={this.props.getInfo} />
            </div>
        )
    }
}