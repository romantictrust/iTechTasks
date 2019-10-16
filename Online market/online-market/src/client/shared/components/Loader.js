import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <CircularProgress className={classes.progress} />
    </Grid>
  );
}
