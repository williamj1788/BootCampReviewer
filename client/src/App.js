import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
  
  componentDidMount(){
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      this.setState({data: xhr.response}, () => {console.log(xhr.response)});
    }
    xhr.open('GET', 'http://localhost:8080',true);
    xhr.send();
  }
  
  
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}

export default App;
