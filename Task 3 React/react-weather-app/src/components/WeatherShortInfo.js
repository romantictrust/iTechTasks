import React, { PureComponent } from "react";

class WeatherShortInfo extends PureComponent {
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
      <div className="header">
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${this.state.dataSource.weather[0].icon}@2x.png`}
            alt="White cloud"
          ></img>
        </div>
        <div>
          <div>
            {this.state.cityData.name},{this.state.cityData.country}
          </div>
          <div>{this.state.dataSource.main.temp}</div>
        </div>
      </div>
    );
  }
}
export default WeatherShortInfo;
