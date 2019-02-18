import React from 'react';

export default class CampPageDetails extends React.Component{
    render(){
        return(
            <div className="col-md-6 col-xl-3 pt-sm-5 pt-md-0 order-2 order-md-2 order-xl-1 ">
                <div className="CampPage-details mx-auto">
                    <h1 className="CampPage-card-title pt-3">Details</h1>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Rating:</span> 9 out of 10 (According to users)</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Cost:</span> 17% of income for the first 2 years if you get a job making 50k or more. Or 20k up front</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Duration:</span> 30 Weeks</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Job Placement Rate:</span>  83% after 6 months</p>
                    <p className="CampPage-details-info"><span style={{fontWeight: "bold"}}>Medium Income:</span> 70,000k</p>
                </div>
            </div>
        )
    }
}