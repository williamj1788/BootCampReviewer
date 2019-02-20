import React from 'react';

export default class DashboardUsers extends React.Component{
    render(){
        let users = this.props.Users;
        let userlist = this.props.Users.reduce((acc, value) => {
            return acc + value + '\n';
        },'');
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