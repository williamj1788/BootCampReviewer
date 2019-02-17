import React from 'react';
import CampCard from './CampCard';

const User = ({ match }) => <p>{match.params.id}</p>
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