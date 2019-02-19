import React from 'react';

export default class DashboardUsers extends React.Component{
    render(){
        return(
            <div>
                <h2 className="Dashboard-title pt-3">Users</h2>
                <div className="Dashboard-users-container">
                    <div className="offset">
                        <p className="Dashboard-total pt-3"><span style={{fontWeight: "bold"}}>Total:</span> 5</p>
                        <textarea className="Dashboard-textarea" value="User1" readOnly></textarea>
                    </div>
                </div>
            </div>
        )
    }
}