import React from 'react';

// var logo = require('C:/Users/deathkiller101x/Desktop/Projects/Websites/BootCampReviewer/client/src/Img/LambdaIcon.png');
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
        
        var image = new Image();
        // console.log(image);
        image.src = this.props.data.logo;
        image.alt = "Bootcamp card logo";
        // image.className = "Campcard-img pt-3";
        return(
            <div className="Campcard mx-3 my-5" onClick = {this.onClick}>
                <img src={image.src} alt={image.alt} className="Campcard-img pt-3"></img>
                <p className="Campcard-text">{this.props.data.description}</p>
                <p className="Campcard-info"><span style={{fontWeight: "bold"}}>Rating: </span> {this.props.data.rating} out of 10</p>
                <p className="Campcard-info"><span style={{fontWeight: "bold"}}>Cost: $</span>{this.props.data.cost}</p>
                <p className="Campcard-info"><span style={{fontWeight: "bold"}}>Duration: </span>{this.props.data.duration} Weeks</p>
            </div>
        )
    }
}