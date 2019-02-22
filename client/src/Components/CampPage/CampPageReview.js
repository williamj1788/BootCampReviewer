import React from 'react';
import CampPageAddReview from './CampPageAddReview';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { user: state.user };
};

class CampPageReview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showAddReview: false,
            showAddReviewButton: this.ShouldShowAddReviewButtion(),
            reviews: [],
        }
        this.onClick = this.onClick.bind(this);
        this.ShouldShowAddReviewButtion = this.ShouldShowAddReviewButtion.bind(this);
        this.SetShowAddReviewButton = this.SetShowAddReviewButton.bind(this);
        this.addReview = this.addReview.bind(this);
    }

    componentDidMount(){
        this.setState({
            showAddReviewButton: this.ShouldShowAddReviewButtion(),
            reviews: this.props.reviews
        });
    }

    ShouldShowAddReviewButtion(){
        let reviews = this.props.reviews;
        if(reviews){
            let userReview = reviews.filter((review) => {
                return review.by === this.props.user;
            });
            // console.log(userReview);
            if(userReview.length > 0){
                // console.log('false');
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
        console.log(this.props.reviews)
        let temp = this.state.reviews;
        console.log(this.state.reviews);
        // temp.push(review);
        // this.setState({
        //     reviews: temp,
        // });
    }
    
    onClick(){
        this.setState({
            showAddReview: this.state.showAddReview ? false : true
        });
    }
    
    render(){
        // console.log('Review Rendered');
        let reviews = this.state.reviews;
        // console.log(reviews);
        let reviewsText = '';
        let visible = 'visible';
        // || reviews !== []
        // console.log(reviews !== undefined);
        // console.log(reviews.length);
        if(reviews){
            // console.log('Reviews exist')
            if(!this.ShouldShowAddReviewButtion()){
                visible = 'hidden';
            }
            reviewsText = reviews.reduce((acc, review) =>{
                return acc + review.by + '\nRating: ' + review.rating + '\n' + review.reviewDescription + '\n\n';
            },'');
            // console.log(reviewsText);
        }else{
            // console.log('Reviews dont exist')
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