import React from 'react';
import CampCard from './CampCard';
import { setCampCards } from '../action';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { cards: state.campCards };
};

class BrowseCampCard extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        if(!this.props.cards){
            fetch('http://localhost:8080/?type=Cards')
            .then(req => req.json())
            .then(cardInfo => this.props.dispatch(setCampCards(cardInfo)));
        }
    }    
    render(){
        let Cards = <p>waiting on server</p>
        if(this.props.cards !== null){
            Cards = this.props.cards.bootcamps.map((item,i) =>{
                return <CampCard history={this.props.history} data={item} key={i}/>
            }); 
        }
        return(
            <div className="card-container">
                {Cards}
            </div>
        )
    }
}
BrowseCampCard = connect(mapStateToProps)(BrowseCampCard);
export default BrowseCampCard;