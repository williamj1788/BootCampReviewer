import React from 'react';

export default class Dashboard extends React.Component{
    render(){
        return(
            <div className="Main-Background">
                <div>
                    <h2 className="Dashboard-title pt-3">Users</h2>
                    <div className="Dashboard-users-container">
                        <div className="offset">
                            <p className="Dashboard-total pt-3"><span style={{fontWeight: "bold"}}>Total:</span> 5</p>
                            <textarea className="Dashboard-textarea" value="User1" readOnly></textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="Dashboard-title pt-3">Bootcamps</h2>
                    <div className="Dashboard-bootcamp-container">
                        <div className="offset">
                            <p className="Dashboard-total pt-3"><span style={{fontWeight: "bold"}}>Total:</span> 1</p>
                            <textarea className="Dashboard-textarea" value="Lambda" readOnly></textarea>
                        </div>
                    </div>
                </div>
                <div className="Dashboard-form-container">
                    <div className="offset">
                        <form>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}