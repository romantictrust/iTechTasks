import React, { PureComponent } from "react";
import HeaderWeatherInfo from '../HeaderWeatherInfo';
import { connect } from "react-redux";

class HeaderWeatherInfoContainer extends PureComponent {
  render() {
    return <HeaderWeatherInfo/>
  }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWeatherInfoContainer);