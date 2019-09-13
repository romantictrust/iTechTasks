import React, { PureComponent } from "react";
import HeaderWeatherInfo from "../HeaderWeatherInfo";
import { connect } from "react-redux";

class HeaderWeatherInfoContainer extends PureComponent {
  render() {
    if(this.props.weatherData)
    return <HeaderWeatherInfo weatherData={this.props.weatherData}/>;
    else return 'NO DATA'
  }
}

const mapStateToProps = state => {
  return {
    weatherData: state.fetchedData.weatherData
  };
};

export default connect(mapStateToProps)(HeaderWeatherInfoContainer);
