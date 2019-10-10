import React, { PureComponent } from "react";
import { connect } from "react-redux";
import AdminPage from "../AdminPage";
import { setUsersData } from "../../../store/MainPage/actions";
import { setUsersList } from "../../../store/AdminPage/actions";

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
