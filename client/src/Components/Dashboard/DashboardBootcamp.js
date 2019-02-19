import React from 'react';

export default class DashboardBootcamp extends React.Component{
    render(){
        return(
            <div>
                <h2 className="Dashboard-title pt-3">Bootcamps</h2>
                <div className="Dashboard-bootcamp-container">
                    <div className="offset">
                        <p className="Dashboard-total pt-3"><span style={{fontWeight: "bold"}}>Total:</span> 1</p>
                        <textarea className="Dashboard-textarea" value="Lambda" readOnly></textarea>
                    </div>
                </div>
            </div>
        )
    }
}