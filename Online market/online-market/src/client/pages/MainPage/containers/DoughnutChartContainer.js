import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DoughnutChart from '../components/DoughnutChart';

class DoughnutChartContainer extends PureComponent {
  render() {
    return <DoughnutChart data={this.props.user} />;
  }
}

const mapStateToProps = (state) => ({
  user: state.mainPage.user,
});

export default connect(
  mapStateToProps,
  null,
)(DoughnutChartContainer);
