import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../../style/icons/logoIcon/logo.png";

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

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <img className={classes.logo} src={logo} alt="Company Logo" />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
