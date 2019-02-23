import React from 'react';
import { connect } from "react-redux";
import { setUsersDashboard } from '../action';

const mapStateToProps = state => {
    return { usersNames: state.usersNames };
}; 

class DashboardUsers extends React.Component{
    
    componentDidMount(){
        if(!this.props.usersNames){
            fetch('http://localhost:8080/?type=dashboard')
            .then(req => req.json())
            .then(database => {this.props.dispatch(setUsersDashboard(database.users))})
        }
    }

    render(){
        let users = [];
        let userlist = '';
        if(this.props.usersNames){
            users = this.props.usersNames;
            userlist = this.props.Users.reduce((acc, value) => {
                return acc + value + '\n';
            },'');
        }
        return(
            <div>
                <h2 className="Dashboard-title pt-3">Users</h2>
                <div className="Dashboard-users-container">
                    <div className="offset">
                        <p className="Dashboard-total pt-3"><span style={{fontWeight: "bold"}}>Total:</span> {users.length}</p>
                        <textarea className="Dashboard-textarea" value={userlist} readOnly></textarea>
                    </div>
                </div>
            </div>
        )
    }
}
DashboardUsers = connect(mapStateToProps)(DashboardUsers);
export default DashboardUsers;