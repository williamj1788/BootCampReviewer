import React from 'react';

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
        return(
            <div className="col-md-12 col-xl-6 pt-sm-5 pt-xl-0 order-3 order-md-3 order-xl-1 mb-5">
                <div className="CampPage-review mx-auto">
                    <h1 className="CampPage-card-title pt-3">Reviews</h1>
                    <textarea className="CampPage-review-info" readOnly></textarea>
                    <button onClick={this.onClick} type="button" className="btn btn-primary float-right" style={{position: "relative",right: "30px"}}>Show Review Tab</button>
                </div>
                <div className="CampPage-AddReview mx-auto mt-5" style={{display: this.state.showAddReview ? 'inherit': 'none'}}>
                    <p className="CampPage-AddReview-title pt-3">Leave a Review</p>
                    <form>
                        <div className="Camppage-AddReview-Rating input-group mx-auto">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Rating</label>
                            </div>
                            <select defaultValue="1" className="custom-select" id="inputGroupSelect01">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            
                        </div>
                        <textarea className="CampPage-AddReview-textarea mx-auto mt-3 p-2" placeholder="What did you think about the bootcamp"></textarea>
                        <button className="btn btn-primary mx-auto d-block mt-3">Submit Review</button>
                    </form>
                </div>
            </div>
        )
    }
}