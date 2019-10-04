import React from "react";
import useStyles from "../styles/AdminPageStyle";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import UsersPannel from "../components/UsersPannel";
import MaterialsPannel from "../components/MaterialsPannel";

export default function Page(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Container maxWidth="md" fixed>
        <Grid item variant="fullWidth">
          <UsersPannel />
        </Grid>
      </Container>
      <Container maxWidth="sm">
        <Grid item>
          <MaterialsPannel />
        </Grid>
      </Container>
    </Grid>
  );
}
