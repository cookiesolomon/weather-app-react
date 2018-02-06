import React from 'react';
// import CommentForm from './CommentForm';
// import CommentsListBox from './CommentsListBox';
// import WeatherBox from './WeatherBox';
//comment box (Holds the comment data with an option to delete)




class CommentBox extends React.Component { 
  constructor(props){
    super(props);
    this.state = {name: this.props.item.name, text: this.props.item.text }
  }
  render() {
    
    return (
    
       <div>
        name: {this.state.name}
        text: {this.state.text}
        <button type="text">delete comment</button>
      </div>
    )
  }
}

export default CommentBox;