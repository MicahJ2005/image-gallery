import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
// listing all imports need to speak to this js file

class App extends Component {
  /// setting state with my galleryList array
  state = {
    galleryList: []

  }
  ///mounting the components of my getGallery function
  componentDidMount() {
    this.getGallery();
  }

  //Running getGallery axios to obtain gallery data from the galleryList
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
/// rendering info from GalleryList
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
          <div className="list">
              <GalleryList galleryList={this.state.galleryList} getGallery={this.getGallery}/>
              
              
          </div>
              
      </div>
    );
  }
}

export default App;
