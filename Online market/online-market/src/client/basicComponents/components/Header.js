import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../../style/icons/logoIcon/logo.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    width: "60px",
    height: "60px"
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container className={classes.root}>
            <Grid item>
              <img className={classes.logo} src={logo} alt="Company Logo" />
            </Grid>
            <Grid item>
              <Button color="inherit" disableRipple={true}>
              <Link to='/authorization' style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
              </Button>
              <Button color="inherit" disableRipple={true}>
              <Link to='/registration' style={{ textDecoration: 'none', color: 'white' }}>Register</Link>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
