import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import AuthPage from '../AuthPage';
import HeaderContainer from '../../../basicComponents/containers/HeaderContainer';
import { clearStorage } from '../../../store/MainPage/actions';

class AuthPageContainer extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <HeaderContainer />
        </Grid>
        <Grid item>
          <AuthPage clearStorage={this.props.clearStorage} />
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  clearStorage,
};

export default connect(
  null,
  mapDispatchToProps,
)(AuthPageContainer);
