import React, { Component } from 'react';
import axios from 'axios';



class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            city: []
        }
    }
    handleSubmit(event) {
        event.preventDefault();//<== will prevent the original code from taking place (Submit/CLick etc)

        var url = `http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=8f39e593725960d378746704ad2a259a&q=${this.state.city}&units=imperial`

        axios.get(url)
     .then(response => {
      
            var structure = {
                name: response.data.name,
                country: response.data.sys.country,
                icon: response.data.weather[0].icon,
                temp: response.data.main.temp, 
                text: response.data.weather[0].main,
                comments: []
            };
            this.props.onSubmitSearchForm(structure);
            this.setState({city: ''});
            console.log(this.props);
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    render() {
        return (
            <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter city"
                        required
                        value={this.state.city}
                        onChange={(event) => this.setState({ city: event.target.value })} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        );
    }
}
export default SearchForm;