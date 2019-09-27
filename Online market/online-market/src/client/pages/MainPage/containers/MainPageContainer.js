import React, { PureComponent } from "react";
import MainPage from "../MainPage";
import { connect } from "react-redux";
import { setUsersData } from "../../../store/MainPage/actions";

class MainPageContainer extends PureComponent {
  render() {
    let sessionUser = JSON.parse(sessionStorage.getItem("user"));
    if (this.props.user.id) {
      if (this.props.user.materials !== sessionUser.materials) {
        let mergedObj = { ...sessionUser, ...this.props.user };
        sessionStorage.setItem("user", JSON.stringify(mergedObj));
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
