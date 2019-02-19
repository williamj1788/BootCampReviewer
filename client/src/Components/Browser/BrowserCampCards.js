import React from 'react';
import CampCard from './CampCard';
var logos = require('C:/Users/deathkiller101x/Desktop/Projects/Websites/BootCampReviewer/client/src/Img/LambdaIcon.png');
var campCardDatabase ={
    CardData:[
        {
            logo: logos,
            description: 'Lambda School 232330 week, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home',
            rating: 7,
            cost: 30300,
            duration: 38,
        },
        {
            logo: logos,
            description: 'Lambda School is a 30 week, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home',
            rating: 3,
            cost: 30000,
            duration: 2,
        },
        {
            logo: logos,
            description: 'Lambda School is a 30 week, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home',
            rating: 2,
            cost: 3000,
            duration: 30,
        }
    ]
}



export default class BrowseCampCard extends React.Component{
    
    render(){
        console.log(campCardDatabase);
        let Cards = campCardDatabase.CardData.map((item,i) =>{
            return <CampCard history={this.props.history} data={item} key={i}/>
        });

        return(
            <div className="card-container">
                {Cards}
            </div>
        )
    }
}