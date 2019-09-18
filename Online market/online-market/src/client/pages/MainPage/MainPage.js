import React, { PureComponent } from "react";
import Header from "../../basicComponents/components/Header";
import Page from "./components/Page";
import Grid from "@material-ui/core/Grid";

export default class MainPage extends PureComponent {
  render() {
    return (
      <Grid container direction="column" spacing={10}>
          <Grid item><Header/></Grid>
          <Grid item><Page/></Grid>
      </Grid>
    );
  }
}
