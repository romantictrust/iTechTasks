import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Activities from '../components/Activities';

class ActivitiesContainer extends PureComponent {
  render() {
    return <Activities payment={this.props.payment} />;
  }
}

const mapStateToProps = (state) => ({
  payment: state.mainPage.payment,
});


export default connect(
  mapStateToProps,
  null,
)(ActivitiesContainer);
