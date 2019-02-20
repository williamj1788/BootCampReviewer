import React from 'react';

export default class DashboardForm extends React.Component{
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        var form = document.getElementById("boot-form");
        const data = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            let res = xhr.response;
            console.log(JSON.parse(res));
        }
        xhr.open('POST', "http://localhost:8080/?type=create",true);
        xhr.send(data);
        
        return false;
    }
    componentDidMount(){
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            let res = xhr.response;
            console.log(JSON.parse(res));
        }
        xhr.open('POST', "http://localhost:8080/?type=dashboard",true);
        xhr.send();
    }
    
    render(){
        return(
            <div className="Dashboard-form-container my-3">
                <div className="offset">
                    <form className="container-fluid" onSubmit={this.handleSubmit} id="boot-form">
                        <div className="row pt-3">
                            <div className="col-5">
                                <label className="Dashboard-form-text" htmlFor="Name">Name:</label>
                            </div>
                            <div className="col-7">
                                <input type="name" name="Name" className="form-control" required/>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <label className="Dashboard-form-text" htmlFor="description">Description:</label>
                            </div>
                            <div className="col-7">
                                <textarea name="description" className="form-control" maxLength="250" style={{resize: "none"}} required></textarea>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <label className="Dashboard-form-text" htmlFor="cost">Cost:</label>
                            </div>
                            <div className="col-7">
                                <input type="number" name="cost" className="form-control" min="0" required/>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <label className="Dashboard-form-text" htmlFor="CostInDetail">Cost In Detail:</label>
                            </div>
                            <div className="col-7">
                                <textarea name="CostInDetail" className="form-control" maxLength="200" style={{resize: "none"}} required></textarea>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <label className="Dashboard-form-text" htmlFor="duration">Duration:</label>
                            </div>
                            <div className="col-7">
                                <input type="number" name="duration" className="form-control" min="1" max="52" required/>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <label className="Dashboard-form-text" htmlFor="JPR">Jop Placement Rate:</label>
                            </div>
                            <div className="col-7">
                                <input type="number" name="JPR" className="form-control" min="0" max="1" step="0.01" required/>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <label className="Dashboard-form-text" htmlFor="medium">Medium:</label>
                            </div>
                            <div className="col-7">
                                <input type="number" name="medium" className="form-control" min="0" required/>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <label className="Dashboard-form-text" htmlFor="statement">Mission Statement:</label>
                            </div>
                            <div className="col-7">
                                <textarea name="statement" className="form-control" maxLength="75" style={{resize: "none"}} required></textarea>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-5">
                                <label className="Dashboard-form-text" id="inputGroupFile01" htmlFor="logo">Icon:</label>
                            </div>
                            <div className="col-7">
                                <input type="file" id="inputGroupFile01" name="logo" aria-describedby="inputGroupFileAddon01" />
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-12">
                                <button type="submit" className="btn btn-main2 mx-auto">Create new Bootcamp</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}