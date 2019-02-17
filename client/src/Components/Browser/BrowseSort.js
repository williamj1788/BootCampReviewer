import React from 'react';

export default class BrowseSort extends React.Component{

    render(){
        return(
            <div className="input-group my-0 mx-auto pt-5" id="Sort-Input">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="prepend">Sort By</span>
                </div>
                <select class="form-control" >
                    <option value="Rating">Rating</option>
                    <option value="Cost">Cost</option>
                    <option value="Duration">Duration</option>
                    <option value="Name">Name</option>
                </select>
            </div>
        )
    }
}