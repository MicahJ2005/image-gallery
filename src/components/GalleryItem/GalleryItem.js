import React, { Component } from 'react';


class GalleryItem extends Component {
  
    constructor(props) {
        super(props);
        this.state = {showPicture: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    

    displayPicture = () => {
        if(this.state.showPicture === true){
        return <ul><img alt="DOMimage" src={this.props.path}/></ul>
    }
        else{
            return <ul>{this.props.description}</ul>
        }
    }

    handleToggleClick() {
        console.log('in handleClick');
        this.setState(state => ({
        showPicture: !state.showPicture
        }));
    }

    render() {
        return (
          <div className="domImages" onClick={this.handleToggleClick}>
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