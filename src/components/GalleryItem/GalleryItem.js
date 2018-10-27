import React, { Component } from 'react';


class GalleryItem extends Component {
  
    state = {
        displayImage: true
    }

    displayPicture = () => {
        if(this.state.displayImage){
        return <ul><img alt="DOMimage" src={this.props.path}/></ul>
    }
        else{
            return <ul>{this.props.description}</ul>
        }
    }

    render() {
        return (
          <div>
              {this.displayPicture()}
          </div>
            // <section>
            //   <table>
            //     <thead>
            //       <tr>
            //         <th>My Gallery</th>
            //       </tr>
            //     </thead>
            //     <tbody>
            //       {this.props.galleryItem.map( picture =>
            //         <tr key={picture.id}><td><img alt="domRender" src={picture.path}/>Description: {picture.description} ID: {picture.id} Likes: {picture.likes}</td>
                    
            //         </tr>
            //       )}
            //     </tbody>
            //   </table>
            // </section>
        );
      }
}

export default GalleryItem;