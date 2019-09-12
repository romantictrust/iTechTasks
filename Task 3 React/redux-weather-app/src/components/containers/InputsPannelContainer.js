import React, { PureComponent } from "react";
import InputsPannel from "../InputsPannel";
import { connect } from "react-redux";
import { setCity, setDaysAmount } from "../../store/InputsPannel/actions";
import { setWeatherData } from "../../store/FetchWeatherAPI/actions";

class InputsPannelContainer extends PureComponent {
  render() {
    return (
      <InputsPannel
        city={this.props.city}
        days={this.props.days}
        setCity={this.props.setCity}
        setDaysAmount={this.props.setDaysAmount}
        setWeatherData={this.props.setWeatherData}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state.weatherInputs.city,
    days: state.weatherInputs.days
  };
};

const mapDispatchToProps = {
  setCity,
  setDaysAmount,
  setWeatherData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputsPannelContainer);
