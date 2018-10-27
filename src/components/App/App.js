import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  
  state = {
    galleryList: []

  }
  componentDidMount() {
    this.getGallery();
  }

  getGallery = () => {
    axios.get('/gallery')
    .then( response => {
      console.log('GET response', response);
      
      this.setState({
        galleryList: response.data 
      })
    }).catch( error => {
      alert('Error', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
          <div className="list">
              <GalleryList galleryList={this.state.galleryList}/>
          </div>
              
      </div>
    );
  }
}

export default App;
