import React, { PureComponent } from "react";
import MainPage from "../MainPage";
import { connect } from "react-redux";
import { setUsersData } from "../../../store/MainPage/actions";
import updateUser from "../functions/updateUser";

class MainPageContainer extends PureComponent {
  render() {
    let sessionUser = JSON.parse(sessionStorage.getItem("user"));
    if (this.props.user.id) {
      if (this.props.user.balance !== sessionUser.balance) {
        let mergedObj = { ...sessionUser, ...this.props.user };
        sessionStorage.setItem("user", JSON.stringify(mergedObj));
        if (this.props.user.email) updateUser(mergedObj);
      }
    }

    return <MainPage setUsersData={this.props.setUsersData} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.mainPage.user
  };
};

const mapDispatchToProps = {
  setUsersData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPageContainer);
