import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import MainPage from '../MainPage';
import { setUsersData } from '../../../store/MainPage/actions';
import updateUser from '../functions/updateUser';

async function updateUserAsync(mergedObj) {
  await updateUser(mergedObj);
}

class MainPageContainer extends PureComponent {
  render() {
    const sessionUser = JSON.parse(sessionStorage.getItem('user'));
    if (this.props.user.id) {
      if (this.props.user.balance !== sessionUser.balance) {
        const mergedObj = { ...sessionUser, ...this.props.user };
        sessionStorage.setItem('user', JSON.stringify(mergedObj));
        if (this.props.user.email) updateUserAsync(mergedObj);
      }
    }
    return <MainPage setUsersData={this.props.setUsersData} />;
  }
}

const mapStateToProps = (state) => ({
  user: state.mainPage.user,
});

const mapDispatchToProps = {
  setUsersData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPageContainer);
