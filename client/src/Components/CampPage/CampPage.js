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

            },
        }
        this.getCampInfo = this.getCampInfo.bind(this);
    }
    
    componentDidMount(){
        this.getCampInfo();
    }
    getCampInfo(){
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            let info = JSON.parse(xhr.response);
            this.setState({
                campInfo: info,
            },() => {console.log(info)});
        }
        xhr.open('POST', `http://localhost:8080/?type=camp&Campnumber=${this.props.match.params.id}`,true);
        xhr.send();
        console.log('getcampinfo called');
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
                            <CampPageReview id={this.props.match.params.id} reviews={this.state.campInfo.reviews} getInfo={this.getCampInfo}/>
                            <CampPageDetails cost={this.state.campInfo.CostInDetail} duration={this.state.campInfo.duration} JPR={this.state.campInfo.JPR} medium={this.state.campInfo.medium} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}