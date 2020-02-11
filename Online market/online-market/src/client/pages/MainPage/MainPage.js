import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import HeaderContainer from '../../shared/containers/HeaderContainer';
import Page from './components/Page';
import { altUser } from '../../constants';

export default class MainPage extends PureComponent {
  render() {
    const { setUsersData } = this.props;
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user && !user.isAdmin) setUsersData(user);
    else {
      sessionStorage.setItem('user', JSON.stringify(altUser));
      setUsersData(altUser);
    }
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
