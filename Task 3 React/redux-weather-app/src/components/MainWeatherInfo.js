import React, { PureComponent } from "react";

class MainWeatherInfo extends PureComponent {
  weatherIcon = this.props.weatherData.weather[0].icon;
  render() {
    return (
      <div className="weatherBlock">
        <div>
          <img
            className="cloudBlue"
            alt="Weather icon"
            src={`http://openweathermap.org/img/wn/${this.weatherIcon}@2x.png`}
          ></img>
        </div>
        <div>
          <div>
            Place: {this.props.cityInfo.name}, {this.props.cityInfo.country}
          </div>
          <div>Temperature: {this.props.weatherData.main.temp}</div>
          <div>Wind: {this.props.weatherData.wind.speed}</div>
          <div>Date: {this.props.weatherData.dt_txt}</div>
        </div>
      </div>
    );
  }
}
export default MainWeatherInfo;
