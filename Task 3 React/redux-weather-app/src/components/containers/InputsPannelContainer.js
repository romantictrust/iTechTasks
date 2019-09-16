import React, { PureComponent } from "react";
import InputsPannel from "../InputsPannel";
import { connect } from "react-redux";
import { setCity, setDaysAmount } from "../../store/InputsPannel/actions";

class InputsPannelContainer extends PureComponent {
  render() {
    return (
      <InputsPannel
        city={this.props.city}
        days={this.props.days}
        setCity={this.props.setCity}
        setDaysAmount={this.props.setDaysAmount}
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
  setDaysAmount
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputsPannelContainer);
