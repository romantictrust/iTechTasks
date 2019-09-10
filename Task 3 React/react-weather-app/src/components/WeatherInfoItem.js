import React, { PureComponent } from "react";

class WeatherInfoItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.dataSource,
      cityData: this.props.cityData
    };
  }
  static getDerivedStateFromProps(newProps) {
    return {
      dataSource: newProps.dataSource,
      cityData: newProps.cityData
    };
  }

  render() {
    return (
      <div className="weatherBlock">
        <div>
          <img
            className="cloudBlue"
            alt="Weather icon"
            src={`http://openweathermap.org/img/wn/${this.state.dataSource.weather[0].icon}@2x.png`}
          ></img>
        </div>
        <div>
          <div>
            Place: {this.state.cityData.name},{this.state.cityData.country}
          </div>
          <div>
            Temperature: {this.state.dataSource.main.temp}
          </div>
          <div>Wind: {this.state.dataSource.wind.speed}</div>
          <div>Date: {this.state.dataSource.dt_txt.substring(0, 10)}</div>
        </div>
      </div>
    );
  }
}
export default WeatherInfoItem;
