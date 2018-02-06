import React from 'react';
import CommentsListBox from './CommentsListBox';
import CommentForm from './CommentForm';


//weather component (represents full weather box)

class WeatherBox extends React.Component { 
  constructor(props){
    super(props);
    this.onsubmitComment = this.onsubmitComment.bind(this);
    this.deleteCity = this.deleteCity.bind(this);
    this.state = {comments: []}
  }

  onsubmitComment(data){
    this.setState(prevState => ({
      comments: prevState.comments.concat(data)
    }));
  }

 deleteCity(){
   var cityId = this.props.id;
   this.props.deleteCity(cityId);
 } 

  render() {
    return (
       <div className="weather-box">
        <div>
          <span className="glyphicon glyphicon-trash pull-right"></span>
          <div className="media-left">

          <h4 className="media-heading">{this.props.item.name}, {this.props.item.country}</h4>
          <p>{this.props.item.temp}&#8457;</p>
          <img src={`http://openweathermap.org/img/w/${this.props.item.icon}.png`} alt={this.props.item.name} className="media-object" style={{ width: 60}}/></div>
          {this.props.item.text}
          <button onClick={this.deleteCity} type="button" className="delete-city">remove</button>
          
        </div>
        <CommentForm onsubmitComment={this.onsubmitComment}/>
        <CommentsListBox comments={this.state.comments}/> 
        <hr/>
      </div>
    )
  }
}

export default WeatherBox;