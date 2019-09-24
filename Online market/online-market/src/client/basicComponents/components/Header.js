import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../../style/icons/logoIcon/logo.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    width: "60px",
    height: "60px"
  }
}));

function Header(props) {
  const classes = useStyles();
  const logOut = () => {
    const user = {};
    props.setUsersData(user);
    sessionStorage.removeItem("Id");
    sessionStorage.removeItem("Email");
    sessionStorage.removeItem("Token");
    props.history.replace("/authorization");
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container className={classes.root}>
            <Grid item className={classes.root}>
              <Link to="/">
                <img className={classes.logo} src={logo} alt="Company Logo" />
              </Link>
            </Grid>
            {props.userData.id ? (
              <Grid item>
                <Button color="inherit" disableRipple={true}>
                  <Typography>{props.userData.email}</Typography>
                </Button>
                <Button color="inherit" disableRipple={true} onClick={logOut}>
                  Log out
                </Button>
              </Grid>
            ) : (
              <Grid item>
                <Button color="inherit" disableRipple={true}>
                  <Link
                    to="/authorization"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </Button>
                <Button color="inherit" disableRipple={true}>
                  <Link
                    to="/registration"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register
                  </Link>
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(Header);
