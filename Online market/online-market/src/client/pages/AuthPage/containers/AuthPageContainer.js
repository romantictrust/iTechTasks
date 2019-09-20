import React, { Component } from "react";
import AuthPage from "../AuthPage";
import { connect } from "react-redux";
import { setUserEmail, setUserPassword } from "../../../store/AuthPage/actions";

class AuthPageContainer extends Component {
  render() {
    return <AuthPage />;
  }
}

const mapStateToProps = state => {
  return {
    email: state.user.email,
    password: state.user.password
  };
};

const mapDispatchToProps = {
  setUserEmail,
  setUserPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPageContainer);
