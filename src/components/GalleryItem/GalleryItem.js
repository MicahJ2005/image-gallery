import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList';

class GalleryItem extends Component {
  
  

  render() {
    return (
      
        <section>
          <table>
            <thead>
              <tr>
                <th>My Gallery</th>
              </tr>
            </thead>
            <tbody>
            {/* {this.props.galleryList.map( picture =>
                <tr key={picture.id}><td><img alt="domRender" src={picture.path}/>Description: {picture.description} ID: {picture.id} Likes: {picture.likes}</td>
                
                </tr>
              )} */}
                {/* <GalleryList galleryList={this.props.path}/> */}
               
              )}
            </tbody>
          </table>
        </section>
    );
  }
}

export default GalleryItem;