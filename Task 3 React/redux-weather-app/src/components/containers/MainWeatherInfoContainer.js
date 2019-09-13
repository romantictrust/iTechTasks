import React, { PureComponent } from "react";
import MainWeatherInfo from "../MainWeatherInfo";
import { connect } from "react-redux";

class MainWeatherInfoContainer extends PureComponent {
  //  constructor(props) {
  //   super(props);
  //   this.state = {
  //     weatherData: this.props.weatherData
  //   };
  // }
  
  // static getDerivedStateFromProps(newProps) {
  //   return {
  //     weatherData: newProps.weatherData
  //   };
  // }

  render() {
    if (this.props.weatherData)
      return (
        <div className="weatherBlockList">
          {this.props.weatherData.list.map((item, key) => {
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
    weatherData: state.fetchedData.weatherData
  };
};

export default connect(mapStateToProps)(MainWeatherInfoContainer);
