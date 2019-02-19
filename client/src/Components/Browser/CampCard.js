import React from 'react';

var logo = require('C:/Users/deathkiller101x/Desktop/Projects/Websites/BootCampReviewer/client/src/Img/LambdaIcon.png');
export default class CampCard extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(){
        console.log("Clicked");
        this.props.history.push("/browse/2");
    }
    
    render(){
        return(
            <div className="Campcard mx-3 my-5" onClick = {this.onClick}>
                <img src={logo} alt="Bootcamp card logo" className="Campcard-img pt-3"></img>
                <p className="Campcard-text">Lambda School is a 30 week, immersive program that gives 
                you the tools and training you need to launch your new career—from the 
                comfort of your own home</p>
                <p className="Campcard-info"><span style={{fontWeight: "bold"}}>Rating: </span> 9 out of 10</p>
                <p className="Campcard-info"><span style={{fontWeight: "bold"}}>Cost: </span>Special</p>
                <p className="Campcard-info"><span style={{fontWeight: "bold"}}>Duration: </span>30 Weeks</p>
            </div>
        )
    }
}