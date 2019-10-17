import React, { PureComponent } from "react";
import { connect } from "react-redux";
import RegisterPage from "../components/RegisterPage";
import { reconfirmUser } from "../actions/index";

class RegisterPageContainer extends PureComponent {
  render() {
    const { reconfirmUser } = this.props;
    return <RegisterPage reconfirmUser={reconfirmUser} />;
  }
}

const mapDispatchToProps = {
  reconfirmUser
};

export default connect(
  null,
  mapDispatchToProps
)(RegisterPageContainer);
