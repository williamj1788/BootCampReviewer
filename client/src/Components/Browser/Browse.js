import React from 'react';
// import { Route, Link } from 'react-router-dom';

import BrowseNavbar from './BrowseNavbar';
import BrowseSort from './BrowseSort';
import BrowseCampCard from './BrowserCampCards';





export default class Browse extends React.Component{
    
    
    
    render(){
        return(
            <div>
                <BrowseNavbar display={false}/>
                <div className="offset">
                    <BrowseSort />
                    <BrowseCampCard history={this.props.history}/>
                </div>
            </div>
        )
    }
}