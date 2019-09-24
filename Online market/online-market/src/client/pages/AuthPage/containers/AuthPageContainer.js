import React, { Component } from "react";
import AuthPage from "../AuthPage";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from '../../../basicComponents/containers/HeaderContainer';

export default class AuthPageContainer extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <HeaderContainer />
        </Grid>
        <Grid item>
        <AuthPage />
        </Grid>
      </Grid>
    );
  }
}
