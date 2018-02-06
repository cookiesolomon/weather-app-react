import React from 'react';
import WeatherBox from './WeatherBox';
import CommentsListBox from './CommentsListBox';

//weather box list wrapper (Holds the weather componet)
const WeatherListBox = (props) => {

    const boxes = props.boxes.map((item, index) => <WeatherBox key={index} id={index} item={item} deleteCity={props.deleteCity} submitComment={props.submitComment}/>)
    return (
      <div>
        {boxes}
      </div>
    );
  };
  
  export default WeatherListBox;
