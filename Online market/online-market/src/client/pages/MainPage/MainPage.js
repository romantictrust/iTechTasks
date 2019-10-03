import React, { PureComponent } from "react";
import HeaderContainer from "../../basicComponents/containers/HeaderContainer";
import Page from "./components/Page";
import Grid from "@material-ui/core/Grid";
import { altUser } from "../../constants";

export default class MainPage extends PureComponent {
  render() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) this.props.setUsersData(user);
    else {
      sessionStorage.setItem("user", JSON.stringify(altUser));
      this.props.setUsersData(altUser);
    }
    return (
      <Grid container direction="column">
        <Grid item>
          <HeaderContainer />
        </Grid>
        <Grid item>
          <Page />
        </Grid>
      </Grid>
    );
  }
}
