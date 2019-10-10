import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setUsersList } from '../../../store/AdminPage/actions';
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
  user: state.mainPage.user,
  usersList: state.adminPage.usersList,
});

const mapDispatchToProps = {
  setUsersList,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPanelContainer);
