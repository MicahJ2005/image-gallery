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
    

    displayPicture = () => {
        if(this.state.showPicture === true){
        return <div><img className="domImages" alt="DOMimage" src={this.props.path}/></div>
                
                
    }
        else{
            return <div>{this.props.description}</div>
            
        }
    }

    

    handleToggleClick() {
        console.log('in handleClick');
        this.setState(state => ({
        showPicture: !state.showPicture
        }));
    }

    // handleLikeClick = (props) => {
    //     console.log('in LIKE Click', props);
    //     axios({
    //         method: 'PUT',
    //         url: `/gallery/like/${props}`,
    //         data: {
    //             likes: this.props.likes
    //         }
    //     })
    //     .then( (response) => {
    //         console.log('POST response', response);
    //         this.props.getGallery();
    //     })
    //     .catch( function(error){
    //         console.log('POST Error', error);
            
    //     })
    //     }

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