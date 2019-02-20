import React from 'react';
import { connect } from "react-redux";
const mapStateToProps = state => {
    return { user: state.user };
};

class CampPageAddReview extends React.Component{
    constructor(props){
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnSubmit(event){
        let xhr = new XMLHttpRequest();
        event.preventDefault();
        var form = document.getElementById("addReviewForm");
        const data = new FormData(form);
        xhr.load = () => {
            console.log(xhr.response);
        }
        xhr.open('POST', `http://localhost:8080/?type=addReview&Campnumber=${this.props.id}&user=${this.props.user}`,true);
        xhr.send(data);
        form.reset();
        this.props.showSwitch();
    }
    
    render(){
        return(
            <div className="CampPage-AddReview mx-auto mt-5" style={{display: this.props.show ? 'inherit': 'none'}}>
                <p className="CampPage-AddReview-title pt-3">Leave a Review</p>
                <form id="addReviewForm" onSubmit={this.handleOnSubmit}>
                    <div className="Camppage-AddReview-Rating input-group mx-auto">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Rating</label>
                        </div>
                        <select defaultValue="1" className="custom-select" name="rating" id="inputGroupSelect01">
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
                    <textarea name="reviewDescription" className="CampPage-AddReview-textarea mx-auto mt-3 p-2" placeholder="What did you think about the bootcamp"></textarea>
                    <button type="submit" className="btn btn-primary mx-auto d-block mt-3">Submit Review</button>
                </form>
            </div>
        )
    }
}
CampPageAddReview = connect(mapStateToProps)(CampPageAddReview);
export default CampPageAddReview;