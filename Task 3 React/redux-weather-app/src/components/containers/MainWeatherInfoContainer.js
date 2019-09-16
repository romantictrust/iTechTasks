import React, { PureComponent } from "react";
import MainWeatherInfo from "../MainWeatherInfo";
import { connect } from "react-redux";

class MainWeatherInfoContainer extends PureComponent {
  render() {
    if (this.props.weatherData)
      return (
        <div className="weatherBlockList">
          {this.props.weatherData.list.slice(0, this.props.days).map((item, key) => {
            return (
              <MainWeatherInfo
                key={item.dt}
                cityInfo={this.props.weatherData.city}
                weatherData={item}
              />
            );
          })}
        </div>
      );
    else return "NO DATA";
  }
}

const mapStateToProps = state => {
  return {
    weatherData: state.fetchedData.weatherData,
    days : state.weatherInputs.days
  };
};

export default connect(mapStateToProps)(MainWeatherInfoContainer);
