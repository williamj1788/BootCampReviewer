import React from 'react';

import DashboardUsers from './DashboardUsers';
import DashboardBootcamp from './DashboardBootcamp';
import DashboardForm from './DashboardForm';

export default class Dashboard extends React.Component{
    onClick = () => {
        console.log("Clicked");
        this.props.history.push('/browse');
    }
    render(){
        return(
            <div className="Main-Background" style={{height: "100%"}}>
                <button onClick={this.onClick} type="button" className="Main-button btn btn-main2 mx-auto" aria-pressed="true">Back to browse</button>
                <DashboardUsers />
                <DashboardBootcamp />
                <DashboardForm />
            </div>
        )
    }
}