import React, { PureComponent } from "react";
import Activities from "../components/Activities";
import { connect } from "react-redux";

class ActivitiesContainer extends PureComponent {
  render() {
    return <Activities payment={this.props.payment}/>;
  }
}

const mapStateToProps = state => {
  return {
    payment: state.mainPage.payment
  };
};


export default connect(
  mapStateToProps,
  null
)(ActivitiesContainer);
