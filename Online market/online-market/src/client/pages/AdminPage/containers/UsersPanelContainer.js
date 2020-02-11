import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setUsersList, setUserStatus } from '../actions/index';
import UsersPanel from '../components/UsersPanel';

class UsersPanelContainer extends PureComponent {
  render() {
    const { user, usersList, setUsersList, setUserStatus } = this.props;
    return (
      <UsersPanel
        admin={user}
        usersList={usersList}
        setUsersList={setUsersList}
        setUserStatus={setUserStatus}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.shared.user,
  usersList: state.adminPage.usersList,
});

const mapDispatchToProps = {
  setUsersList,
  setUserStatus
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPanelContainer);
