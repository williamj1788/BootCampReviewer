import React from 'react';

import DashboardUsers from './DashboardUsers';
import DashboardBootcamp from './DashboardBootcamp';
import DashboardForm from './DashboardForm';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            bootcamps: []
        }
    }
    
    onClick = () => {
        this.props.history.push('/browse');
    }
    componentDidMount(){
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            let DataBases = JSON.parse(xhr.response);
            console.log(DataBases);
            this.setState({
                users: DataBases.users,
                bootcamps: DataBases.bootcamps
            });
        }
        xhr.open('POST', "http://localhost:8080/?type=dashboard",true);
        xhr.send();
    }
    render(){
        return(
            <div className="Main-Background" style={{height: "100%"}}>
                <button onClick={this.onClick} type="button" className="Main-button btn btn-main2 mx-auto" aria-pressed="true">Back to browse</button>
                <DashboardUsers Users={this.state.users} />
                <DashboardBootcamp Bootcamps={this.state.bootcamps} />
                <DashboardForm />
            </div>
        )
    }
}