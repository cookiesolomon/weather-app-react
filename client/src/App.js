import React, { Component } from 'react';
import SearchForm from './SearchForm';
import WeatherListBox from './WeatherListBox';
import CommentsListBox from './CommentsListBox';
import WeatherBox from './WeatherBox';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
   
    //bind this to functions 
    this.onDeleteCity = this.onDeleteCity.bind(this);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    //Declare local state
    this.state = {
      boxes: [],
     
    }

  } 

  
  onSubmitSearchForm(data) { 
    this.setState(prevState => ({
      boxes: prevState
        .boxes
        .concat(data)
    }));
  };
 

onDeleteCity(item){
 var tempState =  this.state.boxes.slice();
 tempState.splice(tempState.indexOf(item),1);
 this.setState({boxes: tempState});
 }

  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Weather app</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
        </div>
        <WeatherListBox
         deleteCity={this.onDeleteCity} submitComment={this.submitComment} boxes={this.state.boxes}/>
    
      </div>
    );
  }
}

export default App;