import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Page from "./Page";
import HeaderContainer from "../../../shared/containers/HeaderContainer";

export default class RegisterPage extends Component {
  render() {
    const { reconfirmUser } = this.props;
    return (
      <Grid container direction="column">
        <Grid item>
          <HeaderContainer />
        </Grid>
        <Grid item>
          <Page reconfirmUser={reconfirmUser} />
        </Grid>
      </Grid>
    );
  }
}
