import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Activities from "../components/Activities";

class ActivitiesContainer extends PureComponent {
  render() {
    const { payment } = this.props;
    return <Activities payment={payment} />;
  }
}

const mapStateToProps = state => ({
  payment: state.mainPage.payment
});

export default connect(
  mapStateToProps,
  null
)(ActivitiesContainer);
