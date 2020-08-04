import React, { Component } from "react";
import FiveDay from "./FiveDay";
import CitySelector from "./Cityselector";
class FiveDaysForeCast extends Component {
  state = {
    city: localStorage.getItem("myData")
      ? localStorage.getItem("myData")
      : "Hyderabad",
  };
  onCityChange = (city) => {
    this.setState({ city: city });
  };
  render() {
    return (
      <React.Fragment>
        <CitySelector onCityHandler={this.onCityChange}></CitySelector>
        <FiveDay city={this.state.city}></FiveDay>
      </React.Fragment>
    );
  }
}

export default FiveDaysForeCast;
