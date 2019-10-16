import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import AuthPage from "../AuthPage";
import HeaderContainer from "../../../shared/containers/HeaderContainer";
import { clearStorage } from "../../../shared/actions/index";

class AuthPageContainer extends Component {
  render() {
    const { clearStorage } = this.props;
    return (
      <Grid container direction="column">
        <Grid item>
          <HeaderContainer />
        </Grid>
        <Grid item>
          <AuthPage clearStorage={clearStorage} />
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  clearStorage
};

export default connect(
  null,
  mapDispatchToProps
)(AuthPageContainer);
