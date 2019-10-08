import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { setUsersList } from "../../../store/AdminPage/actions";
import UsersPanel from "../components/UsersPanel";

class UsersPanelContainer extends PureComponent {
  render() {
    return (
      <UsersPanel
        admin={this.props.user}
        usersList={this.props.usersList}
        setUsersList={this.props.setUsersList}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.mainPage.user,
    usersList: state.adminPage.usersList
  };
};

const mapDispatchToProps = {
  setUsersList
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPanelContainer);
