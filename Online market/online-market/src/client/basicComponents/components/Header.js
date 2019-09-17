import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Storefront from "@material-ui/icons/Storefront";

const useStyles = makeStyles(theme => ({
  root: {
    direction: "row",
    justify: "space-between",
    alignItems: "center"
  },
  title: {
    flexGrow: 1
  },
  icon: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Storefront fontSize="large" className={classes.icon} />
          <Typography variant="h6" className={classes.title}>
            Online market
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
