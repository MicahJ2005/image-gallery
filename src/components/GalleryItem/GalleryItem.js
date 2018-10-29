import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';


const styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 2,
    },
    padding: {
      padding: `0 ${theme.spacing.unit * 2}px`,
    },
    button: {
        margin: theme.spacing.unit,
      },
  });

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
        return <div className="container" ><img className="domImages" alt="DOMimage" src={this.props.path}/></div>
                
                
    }
        else{
            return <div className="container" >{this.props.description}</div>
            
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
              <li><Badge color="primary" badgeContent={this.props.likes} ><Button onClick={() => this.props.handleLikeClick(this.props.id)} className="likeButton" color="primary" variant="outlined">Like!</Button></Badge></li>
          </div>
            
        );
      }
}
// render.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default withStyles(styles) (GalleryItem);