import React, { PureComponent } from "react";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "../../basicComponents/containers/HeaderContainer";
import Page from "./components/Page";

export default class AdminPage extends PureComponent {
  render() {
    const admin = JSON.parse(sessionStorage.getItem("user"));
    this.props.setUsersData(admin);
    console.log(this.props)
    return (
      <div>
        {admin.isAdmin ? (
          <Grid container direction="column">
            <HeaderContainer />
            <Page />
          </Grid>
        ) : (
          <Grid container justify="center">
            You don't have rights to visit this page.
          </Grid>
        )}
      </div>
    );
  }
}
