import React, { Component } from 'react';


class GalleryItem extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            showPicture: true,
            likes: 0
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    
    ///displayPicture function is running and if/else statement to render either either the picture, or the description,
    /// based on the the showPicture boolean defined in the constructor
    displayPicture = () => {
        if(this.state.showPicture === true){
        return <div><img className="domImages" alt="DOMimage" src={this.props.path}/></div>
                
                
    }
        else{
            return <div>{this.props.description}</div>
            
        }
    }
/// handleToggleClick function is toggling back and forth between a picture and description
    handleToggleClick() {
        console.log('in handleClick');
        this.setState(state => ({
        showPicture: !state.showPicture
        }));
    }

    /// rendering number of likes clicked
    render() {
        return (
          <div className="container" >
              <li onClick={this.handleToggleClick}>{this.displayPicture()}</li>
              <li>Likes: {this.props.likes}</li>
                <li><button onClick={() => this.props.handleLikeClick(this.props.id)} className="likeButton">Like!</button></li>
          </div>
            
        );
      }
}


export default GalleryItem;