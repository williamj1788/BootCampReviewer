import React from 'react';
import { connect } from "react-redux";
import { setCampInfo } from '../action';

import CampPageLogo from './CampPageLogo';
import CampPageDescription from './CampPageDescription';
import CampPageReview from './CampPageReview';
import CampPageDetails from './CampPageDetails';
import BrowseNavbar from '../Browser/BrowseNavbar';

const mapStateToProps = state => {
    return { campInfo: state.campInfo };
}; 

class CampPage extends React.Component{
    
    componentDidMount(){
        if(!this.props.campInfo.id || this.props.campInfo.id !== parseInt(this.props.match.params.id)){
            fetch(`http://localhost:8080/?type=camp&Campnumber=${this.props.match.params.id}`)
            .then(req => req.json())
            .then(campInfo => this.props.dispatch(setCampInfo(campInfo)))
        }
    }
    
    render(){
        return(
            <div>
                <div className="offset">
                    <BrowseNavbar display={true}/>
                    <div className="container-fluid">
                        <CampPageLogo />
                        <div className="CampPage-info row pt-3">
                            <CampPageDescription />
                            <CampPageReview id={this.props.match.params.id} addReview={this.addReview}/>
                            <CampPageDetails  />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
CampPage = connect(mapStateToProps)(CampPage);
export default CampPage;