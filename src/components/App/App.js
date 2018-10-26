import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/guitar.png"/>
      </div>
    );
  }
}

export default App;
