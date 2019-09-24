import React, { PureComponent } from "react";
import HeaderContainer from "../../basicComponents/containers/HeaderContainer";
import Page from "./components/Page";
import Grid from "@material-ui/core/Grid";

export default class MainPage extends PureComponent {
  render() {
    const user = {
      id: sessionStorage.getItem("Id"),
      email: sessionStorage.getItem("Email")
    };
    this.props.setUsersData(user);
    console.log(sessionStorage)
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
