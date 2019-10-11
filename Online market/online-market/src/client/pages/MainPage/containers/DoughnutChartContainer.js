import React, { PureComponent } from "react";
import { connect } from "react-redux";
import DoughnutChart from "../components/DoughnutChart";

class DoughnutChartContainer extends PureComponent {
  render() {
    const { user } = this.props;
    return <DoughnutChart data={user} />;
  }
}

const mapStateToProps = state => ({
  user: state.mainPage.user
});

export default connect(
  mapStateToProps,
  null
)(DoughnutChartContainer);
