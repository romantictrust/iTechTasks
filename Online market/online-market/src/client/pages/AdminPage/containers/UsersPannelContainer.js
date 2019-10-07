import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { setUsersList } from "../../../store/AdminPage/actions";
import UsersPannel from "../components/UsersPannel";

class UsersPannelContainer extends PureComponent {
  render() {
    return (
      <UsersPannel
        usersList={this.props.usersList}
        setUsersList={this.props.setUsersList}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    usersList: state.adminPage.usersList
  };
};

const mapDispatchToProps = {
  setUsersList
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPannelContainer);
