import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        logo: state.campInfo.logo,
        statement: state.campInfo.statement, 
    };
}; 

class CampPageLogo extends React.Component{
    
    
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-12 col-lg-10">
                        <img src={this.props.logo} alt="Bootcamp logo" className="CampPage-logo mx-auto pt-3"></img>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">
                        <p className="CampPage-mission m-auto">{this.props.statement}</p>
                    </div>
                </div>
            </div>
        )
    }
}
CampPageLogo = connect(mapStateToProps)(CampPageLogo);
export default CampPageLogo;