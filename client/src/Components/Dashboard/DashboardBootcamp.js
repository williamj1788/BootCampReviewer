import React from 'react';
import { connect } from "react-redux";
import { setBootcampsDashboard } from '../action';

const mapStateToProps = state => {
    return { bootcampsNames: state.bootcampsNames };
}; 

class DashboardBootcamp extends React.Component{
    
    componentDidMount(){
        if(!this.props.bootcampsNames){
            fetch('http://localhost:8080/?type=dashboard')
            .then(req => req.json())
            .then(database => {this.props.dispatch(setBootcampsDashboard(database.bootcamps))})
        }
    }
    
    render(){
        let Bootcamps = [];
        let Bootcampslist = '';
        if(this.props.bootcampsNames){
            Bootcamps = this.props.Bootcamps;
            Bootcampslist = this.props.Bootcamps.reduce((acc, value) => {
                return acc + value + '\n';
            },'');
        }
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
DashboardBootcamp = connect(mapStateToProps)(DashboardBootcamp);
export default DashboardBootcamp;