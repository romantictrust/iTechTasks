import React, { PureComponent } from "react";
import { connect } from "react-redux";
import AdminPage from "../AdminPage";
import { setUsersList } from "../actions/index";
import { setUsersData } from "../../../shared/actions/index";

class AdminPageContainer extends PureComponent {
  render() {
    const { usersList, setUsersData, setUsersList } = this.props;
    return (
      <AdminPage
        usersList={usersList}
        setUsersData={setUsersData}
        setUsersList={setUsersList}
      />
    );
  }
}

const mapStateToProps = state => ({
  usersList: state.adminPage.usersList
});

const mapDispatchToProps = {
  setUsersData,
  setUsersList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPageContainer);
