import React, { Component } from "react";
import RegisterPage from "../RegisterPage";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "../../../basicComponents/containers/HeaderContainer";

export default class RegisterPageContainer extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <HeaderContainer />
        </Grid>
        <Grid item>
          <RegisterPage />
        </Grid>
      </Grid>
    );
  }
}
