import React, { PureComponent } from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { setUsersData } from "../../store/MainPage/actions";

class HeaderContainer extends PureComponent {
  render() {
    return <Header userData={this.props.user} setUsersData={this.props.setUsersData}/>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.mainPage.user
  };
};

const mapDispatchToProps = {
  setUsersData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
