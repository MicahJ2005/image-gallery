import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
  
  

  render() {
    return (
      
        <section>
          
                <h2>My Gallery</h2>
              
              {this.props.galleryList.map( picture =>
                <GalleryItem key={picture.id} path={picture.path} description={picture.description} likes={picture.likes} />
              )}
            
        </section>
    )
  }
}

export default GalleryList;
