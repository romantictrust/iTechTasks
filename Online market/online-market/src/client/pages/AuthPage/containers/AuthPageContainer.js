import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import AuthPage from "../AuthPage";
import HeaderContainer from "../../../shared/containers/HeaderContainer";
import { loginUser, reconfirmUser } from "../actions/index";
import { clearStorage } from "../../../shared/actions/index";

class AuthPageContainer extends Component {
  render() {
    const { clearStorage, loginUser, reconfirmUser } = this.props;
    return (
      <Grid container direction="column">
        <Grid item>
          <HeaderContainer />
        </Grid>
        <Grid item>
          <AuthPage
            clearStorage={clearStorage}
            loginUser={loginUser}
            reconfirmUser={reconfirmUser}
          />
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  clearStorage,
  loginUser,
  reconfirmUser
};

export default connect(
  null,
  mapDispatchToProps
)(AuthPageContainer);
