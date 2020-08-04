import fetchForecast from "../api";
import React, { Component } from "react";
import Card from "../Card/card";
import "./style.css";
class FiveDay extends Component {
  state = { fiveDays: [], data: {}, error: false };
  my = (message) => {
    this.setState({ error: message });
  };
  componentDidMount() {
    this.fetchWeather(this.props);
  }
  componentDidUpdate(prevProps) {
    if (!(prevProps.city === this.props.city)) {
      this.fetchWeather(this.props);
    }
  }

  async fetchWeather(cityProp) {
    try {
      let query = cityProp.city;
      const { data } = await fetchForecast(query, this.my);
      const { list, city } = data;

      var fiveDays = [];
      for (var i = 0; i < 40; i += 8) {
        fiveDays.push({
          date: list[i].dt_txt,
          temp_min: list[i].main.temp_min,
          temp_max: list[i].main.temp_max,
          humidity: list[i].main.humidity,
          lat: city.coord.lat,
          long: city.coord.lon,
          sunrise: city.sunrise,
          sunset: city.sunset,
          icon: list[i].weather[0].icon,
          main: list[i].weather[0].main,
          description: list[i].weather[0].description,
          city: this.props.city,
        });
      }
      this.setState({ fiveDays, data });
    } catch (err) {}
  }
  render() {
    var container = {
      display: "block",
    };
    return (
      <div className=' dictionary cards-container'>
        {this.state.error ? (
          this.state.fiveDays.map((day, index) => (
            <Card
              className='term'
              key={day.date}
              {...day}
              pos={index}
              data={this.state.data}
            ></Card>
          ))
        ) : (
          <h4>Enter Valid City</h4>
        )}
      </div>
    );
  }
}

export default FiveDay;
