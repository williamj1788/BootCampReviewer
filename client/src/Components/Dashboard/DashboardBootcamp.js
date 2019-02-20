import React from 'react';

export default class DashboardBootcamp extends React.Component{
    render(){
        let Bootcamps = this.props.Bootcamps;
        let Bootcampslist = this.props.Bootcamps.reduce((acc, value) => {
            return acc + value + '\n';
        },'');
        return(
            <div>
                <h2 className="Dashboard-title pt-3">Bootcamps</h2>
                <div className="Dashboard-bootcamp-container">
                    <div className="offset">
                        <p className="Dashboard-total pt-3"><span style={{fontWeight: "bold"}}>Total:</span> {Bootcamps.length}</p>
                        <textarea className="Dashboard-textarea" value={Bootcampslist} readOnly></textarea>
                    </div>
                </div>
            </div>
        )
    }
}