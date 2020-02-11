import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setUsersList } from '../actions/index';
import UsersPanel from '../components/UsersPanel';

class UsersPanelContainer extends PureComponent {
  render() {
    const { user, usersList, setUsersList } = this.props;
    return (
      <UsersPanel
        admin={user}
        usersList={usersList}
        setUsersList={setUsersList}
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
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPanelContainer);
