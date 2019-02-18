import React from 'react';

export default class Dashboard extends React.Component{
    render(){
        return(
            <div className="Main-Background" style={{height: "100%"}}>
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
                <div className="Dashboard-form-container my-3">
                    <div className="offset">
                        <form className="container-fluid" action="http://localhost:8080/form" Method="POST" target="hiddenFrame">
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
                                    <textarea name="description" className="form-control" maxlength="250" style={{resize: "none"}} required></textarea>
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
                                    <textarea name="CostInDetail" className="form-control" maxlength="200" style={{resize: "none"}} required></textarea>
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
                                    <input type="number" name="JPR" className="form-control" min="0" max="1" required/>
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
                                    <textarea name="statement" className="form-control" maxlength="75" style={{resize: "none"}} required></textarea>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-5">
                                    <label className="Dashboard-form-text" id="inputGroupFile01" htmlFor="file">Icon:</label>
                                </div>
                                <div className="col-7">
                                    <input type="file" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-main2 mx-auto">Create new Bootcamp</button>
                                </div>
                            </div>
                            <iframe name="hiddenFrame" style={{display: "none"}}></iframe>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}