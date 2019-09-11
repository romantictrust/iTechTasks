import React, { PureComponent } from "react";
import MainWeatherInfo from "../MainWeatherInfo";
import { connect } from "react-redux";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

class MainWeatherInfoContainer extends PureComponent {
  render() {
    return <MainWeatherInfo />;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainWeatherInfoContainer);
