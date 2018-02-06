import React from 'react';
import CommentBox from './CommentBox';
// import CommentForm from './CommentForm';
// comments component (Holds the seperate comment)


const CommentsListBox = (props) => {

 const comments = props.comments.map((item, index) => <CommentBox key={index} item={item}/>)
  
    return(

      <div>
        {comments}
      </div>
    );

  }
  
  export default CommentsListBox;