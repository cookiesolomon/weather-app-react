import React from 'react';

// comment form (Holds the comment form - will be a part of the comments wrapper)

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         name: '',
         text: ''
        }
        this.submitComment = this.submitComment.bind(this);
    }

    submitComment(event){
        var commentStructure = this.state;

        this.props.onsubmitComment(commentStructure);

        // this.setState=({comment: [{name: '', text: '' }]} )
    }
    render() {
        return (
        
            <div>
                <form action="#" onSubmit={this.submitComment}>
                   <input 
                   type="text" 
                   className="form-control" 
                   id="name" 
                   placeholder="Enter name"
                   value={this.state.name} 
                   onChange={(event) => this.setState({name: event.target.value},function(){
                                console.log('the state has been changed by the onchange')
                                console.log(this.state)
                            })} />
                    
                    <input 
                    type="text" 
                    className="form-control" 
                    id="comment" 
                    placeholder="Enter comment" 
                    value={this.state.text} 
                    onChange={(event) => this.setState({text: event.target.value}, function(){
                        console.log(this.state);
                    })}/>
                   
                        
                    <span className="input-group-btn">
                            <button className="btn btn-default" type="submit">Post</button>
                    </span>
                </form>
            </div>
                )
    }
};



export default CommentForm;