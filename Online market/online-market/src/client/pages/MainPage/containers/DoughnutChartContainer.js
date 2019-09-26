import React, { PureComponent } from "react";
import DoughnutChart from "../components/DoughnutChart";
import { connect } from "react-redux";

class DoughnutChartContainer extends PureComponent {
  render() {
    return <DoughnutChart data={this.props.user} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.mainPage.user
  };
};

export default connect(
  mapStateToProps,
  null
)(DoughnutChartContainer);
