import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Page from './components/Page';
import HeaderContainer from '../../basicComponents/containers/HeaderContainer';

export default class RegisterPage extends Component {
  render() {
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
