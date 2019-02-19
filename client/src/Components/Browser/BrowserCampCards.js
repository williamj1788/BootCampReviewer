import React from 'react';
import CampCard from './CampCard';

export default class BrowseCampCard extends React.Component{
    
    render(){
        return(
            <div className="card-container">
                <CampCard history={this.props.history} />
                <CampCard history={this.props.history} />
                <CampCard history={this.props.history} />
                <CampCard history={this.props.history} />
                <CampCard history={this.props.history} />
                <CampCard history={this.props.history} />
                <CampCard history={this.props.history} />
                <CampCard history={this.props.history} />
                <CampCard history={this.props.history} />
                <CampCard history={this.props.history} />
            </div>
        )
    }
}