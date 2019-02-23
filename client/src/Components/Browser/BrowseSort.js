import React from 'react';
import { sortCards } from '../action';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { user: state.user };
  }; 

class BrowseSort extends React.Component{
    constructor(props){
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    handleOnChange(e){
        console.log(e.target.value);
        this.props.dispatch(sortCards(e.target.value));
    }

    render(){
        return(
            <div className="input-group my-0 mx-auto pt-5" id="Sort-Input">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="prepend">Sort By</span>
                </div>
                <select className="form-control" onChange={this.handleOnChange}>
                    <option value="rating">Rating</option>
                    <option value="cost">Cost</option>
                    <option value="duration">Duration</option>
                    <option value="name">Name</option>
                </select>
            </div>
        )
    }
}
BrowseSort = connect(mapStateToProps)(BrowseSort);
export default BrowseSort;