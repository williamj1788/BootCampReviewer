import React from 'react';

import CampPageLogo from './CampPageLogo';
import CampPageDescription from './CampPageDescription';
import CampPageReview from './CampPageReview';
import CampPageDetails from './CampPageDetails';
import BrowseNavbar from '../Browser/BrowseNavbar';


export default class CampPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            campInfo: {

            }
        }
    }
    
    
    componentDidMount(){
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            let info = JSON.parse(xhr.response);
            console.log(info);
            this.setState({
                campInfo: info
            });
        }
        xhr.open('POST', `http://localhost:8080/?type=camp&Campnumber=${this.props.match.params.id}`,true);
        xhr.send();
    }

    
    render(){
        return(
            <div>
                <div className="offset">
                    <BrowseNavbar display={true}/>
                    <div className="container-fluid">
                        <CampPageLogo logo={this.state.campInfo.logo} statement={this.state.campInfo.statement}/>
                        <div className="CampPage-info row pt-3">
                            <CampPageDescription description={this.state.campInfo.description} />
                            <CampPageReview />
                            <CampPageDetails cost={this.state.campInfo.CostInDetail} duration={this.state.campInfo.duration} JPR={this.state.campInfo.JPR} medium={this.state.campInfo.medium} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}