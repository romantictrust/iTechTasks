import React, { PureComponent } from "react";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "../../shared/containers/HeaderContainer";
import Page from "./components/Page";
import { usersListUrl } from "../../constants";

export default class AdminPage extends PureComponent {
  render() {
    const { usersList, setUsersData, setUsersList } = this.props;
    const admin = JSON.parse(sessionStorage.getItem("user"));

    const getUsersList = admin => {
      return fetch(usersListUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + admin.token
        }
      })
        .then(res => {
          if (res.status >= 400) {
            alert("Token not found");
          }
          return res.json();
        })
        .then(res => {
          setUsersList(res);
        });
    };

    if (!usersList[0]) {
      getUsersList(admin);
      setUsersData(admin);
    }
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
