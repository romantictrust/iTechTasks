import React, { PureComponent } from "react";
import Orders from "../components/Orders";
import { connect } from "react-redux";


class OrdersContainer extends PureComponent {
  render() {
    return <Orders userData={this.props.user}/>;
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
)(OrdersContainer);