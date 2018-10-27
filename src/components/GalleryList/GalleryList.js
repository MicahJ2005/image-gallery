import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';

class GalleryList extends Component {
  
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
            console.log('POST response', response);
            this.props.getGallery();
        })
        .catch( function(error){
            console.log('POST Error', error);
            
        })
        }

  render() {
    return (
      
        <section>
          
                <h2>My Gallery</h2>
              
              {this.props.galleryList.map( picture =>
                <GalleryItem key={picture.id} id={picture.id} path={picture.path} description={picture.description} likes={picture.likes} handleLikeClick={this.handleLikeClick}/>
              )}
                
        </section>
    )
  }
}

export default GalleryList;
