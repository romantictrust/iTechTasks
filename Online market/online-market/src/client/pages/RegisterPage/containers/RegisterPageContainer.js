import React, { Component } from "react";
import RegisterPage from "../RegisterPage";
import Grid from "@material-ui/core/Grid";
import Header from '../../../basicComponents/components/Header';

export default class RegisterPageContainer extends Component {
    render() {
      return (
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
          <RegisterPage />
          </Grid>
        </Grid>
      );
    }
  }