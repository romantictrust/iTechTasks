import React, { PureComponent } from "react";

class HeaderWeatherInfo extends PureComponent {
  weatherIcon = this.props.weatherData.list[0].weather[0].icon;
  render() {
    return (
      <div className="header">
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${this.weatherIcon}@2x.png`}
            alt="White cloud"
          ></img>
        </div>
        <div>
          <div>
            {this.props.weatherData.city.name},{" "}
            {this.props.weatherData.city.country}
          </div>
          <div>{this.props.weatherData.list[0].main.temp}</div>
        </div>
      </div>
    );
  }
}
export default HeaderWeatherInfo;
