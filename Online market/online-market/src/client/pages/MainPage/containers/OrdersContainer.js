import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Orders from "../components/Orders";

class OrdersContainer extends PureComponent {
  render() {
    const { user } = this.props;
    return <Orders userData={user} />;
  }
}

const mapStateToProps = state => ({
  user: state.shared.user
});

export default connect(
  mapStateToProps,
  null
)(OrdersContainer);
