import React, { Component } from 'react';


class GalleryList extends Component {
  
  

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
              {this.props.galleryList.map( picture =>
                <tr key={picture.id}><td><img alt="domRender" src={picture.path}/>Description: {picture.description} ID:{picture.id} Likes: {picture.likes}</td>
                
                </tr>
              )}
            </tbody>
          </table>
        </section>
    );
  }
}

export default GalleryList;
