import React, { Component } from "react";
import AuthPage from "../AuthPage";
import Grid from "@material-ui/core/Grid";
import Header from '../../../basicComponents/components/Header';

export default class AuthPageContainer extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
        <AuthPage />
        </Grid>
      </Grid>
    );
  }
}
