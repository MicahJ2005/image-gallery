import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
        <br/>
        <section>
          <table>
            <thead>
              <tr>
                <th>My Gallery</th>
              </tr>
            </thead>
            <tbody>
              {this.state.galleryList.map( picture =>
                <tr key={picture.id}><td><img alt="domRender" src={picture.path}/></td>
                </tr>
              )}
            </tbody>
            
            
          </table>
        </section>
        
      </div>
    );
  }
}

export default App;
