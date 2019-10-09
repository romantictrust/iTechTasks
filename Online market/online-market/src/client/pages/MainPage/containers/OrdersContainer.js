import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Orders from '../components/Orders';


class OrdersContainer extends PureComponent {
  render() {
    return <Orders userData={this.props.user} />;
  }
}

const mapStateToProps = (state) => ({
  user: state.mainPage.user,
});

export default connect(
  mapStateToProps,
  null,
)(OrdersContainer);
