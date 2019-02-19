import React from 'react';
import CampCard from './CampCard';


export default class BrowseCampCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            campCardDatabase: ''
        }
    }
    
    componentDidMount(){
        var xhr = new XMLHttpRequest();
        xhr.onload = () =>{
            this.setState({
                campCardDatabase: JSON.parse(xhr.response)
            });
        }
        xhr.open('GET', 'http://localhost:8080/?type=Cards', true);
        xhr.send();
    }    
    render(){
        let Cards = <p>waiting on server</p>
        if(this.state.campCardDatabase !== ''){
            console.log(this.state.campCardDatabase);
            Cards = this.state.campCardDatabase.bootcamps.map((item,i) =>{
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