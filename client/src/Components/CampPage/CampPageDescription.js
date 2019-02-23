import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { description: state.campInfo.description };
}; 

class CampPageDescription extends React.Component{
    render(){
        return(
            <div className="col-md-6 col-xl-3 pt-sm-5 pt-md-0 order-1 order-md-1 order-xl-1">
                <div className="CampPage-description mx-auto">
                    <h1 className="CampPage-card-title pt-3">Description</h1>
                    <p className="CampPage-description-info">{this.props.description}</p>
                </div>
            </div>
        )
    }
}
CampPageDescription = connect(mapStateToProps)(CampPageDescription);
export default CampPageDescription;