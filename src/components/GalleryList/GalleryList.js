import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';

class GalleryList extends Component {
  
/// running my click handler to put pass a new like back to the gallery array
    handleLikeClick = (id) => {
        console.log('in LIKE Click', id);
        axios({
            method: 'PUT',
            url: `/gallery/like/${id}`,
            data: {
                likes: this.props.likes
            }
        })
        .then( (response) => {
            console.log('PUT response', response);
            /// running my getGallery function to update like count on the DOM
            this.props.getGallery();
        })
        .catch( function(error){
            console.log('POST Error', error);
            
        })
        }
/// rendering info from GalleryItems
  render() {
    return (
      
        <section>
          
                <h2>My Gallery</h2>
              
              {this.props.galleryList.map( picture =>
                <GalleryItem key={picture.id} id={picture.id} path={picture.path} description={picture.description} likes={picture.likes} handleLikeClick={this.handleLikeClick}/>
                /// passing all map data (including handleLikeClick function) over to GalleryItem
              )}
                
        </section>
    )
  }
}

export default GalleryList;
