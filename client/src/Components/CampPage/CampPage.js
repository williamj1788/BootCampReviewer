import React from 'react';

import CampPageLogo from './CampPageLogo';
import CampPageDescription from './CampPageDescription';
import CampPageReview from './CampPageReview';
import CampPageDetails from './CampPageDetails';


export default class CampPage extends React.Component{
    
    render(){
        return(
            <div>
                <div className="offset">
                    <div className="container-fluid">
                        <CampPageLogo history={this.props.history} />
                        <div className="row pt-3">
                            <CampPageDescription />
                            <CampPageReview />
                            <CampPageDetails />
                        </div>
                    </div>
                    <div className="footer"></div>
                </div>
            </div>
        )
    }
}