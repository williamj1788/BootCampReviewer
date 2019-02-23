import React from 'react';
import CampPageAddReview from './CampPageAddReview';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { reviews: state.campInfo.reviews };
};

class CampPageReview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showAddReview: false,
            showAddReviewButton: true,
        }
        this.onClick = this.onClick.bind(this);
        this.ShouldShowAddReviewButtion = this.ShouldShowAddReviewButtion.bind(this);
        this.SetShowAddReviewButton = this.SetShowAddReviewButton.bind(this);
        this.addReview = this.addReview.bind(this);
    }

    componentDidMount(){
        this.setState({
            showAddReviewButton: this.ShouldShowAddReviewButtion(),
        });
    }

    ShouldShowAddReviewButtion(){
        let reviews = this.props.reviews;
        if(reviews){
            let userReview = reviews.filter((review) => {
                return review.by === this.props.user;
            });
            if(userReview.length > 0){
                return false;
            }else{
                return true;
            }
        }
        return true;
    }

    SetShowAddReviewButton(boolean){
        this.setState({
            showAddReviewButton: boolean
        });
    }

    addReview(review){
        
    }
    
    onClick(){
        this.setState({
            showAddReview: this.state.showAddReview ? false : true
        });
    }
    
    render(){
        let reviews = this.props.reviews;
        let reviewsText = '';
        let visible = 'visible';
        if(reviews){
            if(!this.ShouldShowAddReviewButtion()){
                visible = 'hidden';
            }
            reviewsText = reviews.reduce((acc, review) =>{
                return acc + review.by + '\nRating: ' + review.rating + '\n' + review.reviewDescription + '\n\n';
            },'');
        }
        return(
            <div className="col-md-12 col-xl-6 pt-sm-5 pt-xl-0 order-3 order-md-3 order-xl-1 mb-5">
                <div className="CampPage-review mx-auto">
                    <h1 className="CampPage-card-title pt-3">Reviews</h1>
                    <textarea className="CampPage-review-info" value={reviewsText} readOnly></textarea>
                    <button onClick={this.onClick} type="button" className="btn btn-primary float-right" style={{position: "relative",right: "30px", visibility: visible}}>Show Review Tab</button>
                </div>
                <CampPageAddReview id={this.props.id} show={this.state.showAddReview} showToggle={this.onClick} addReview={this.addReview} />
            </div>
        )
    }
}
CampPageReview = connect(mapStateToProps)(CampPageReview);
export default CampPageReview;