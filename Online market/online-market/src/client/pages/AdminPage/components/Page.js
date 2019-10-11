import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/AdminPageStyle';
import UsersPanelContainer from '../containers/UsersPanelContainer';
import MaterialsPanelContainer from '../containers/MaterialsPanelContainer';

export default function Page() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Container maxWidth="md" fixed>
        <Grid item variant="fullWidth">
          <UsersPanelContainer />
        </Grid>
      </Container>
      <Container maxWidth="sm">
        <Grid item>
          <MaterialsPanelContainer />
        </Grid>
      </Container>
    </Grid>
  );
}
