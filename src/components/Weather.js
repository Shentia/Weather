import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        City : {this.props.city} Country:{this.props.country} Temperature :{" "}
        {this.props.temperature} humidity: {this.props.humidity}
        Condition: {this.props.description}
      </div>
    );
  }
}

export default Weather;
