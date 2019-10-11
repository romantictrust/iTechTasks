import React, { PureComponent } from "react";
import { connect } from "react-redux";
import MainPage from "../MainPage";
import { setUsersData } from "../../../store/MainPage/actions";
import updateUser from "../functions/updateUser";

async function updateUserAsync(mergedObj) {
  await updateUser(mergedObj);
}

class MainPageContainer extends PureComponent {
  render() {
    const { user, setUsersData } = this.props;
    const sessionUser = JSON.parse(sessionStorage.getItem("user"));
    if (user.id) {
      if (user.balance !== sessionUser.balance) {
        const mergedObj = { ...sessionUser, ...user };
        if (user.email)
          updateUserAsync(mergedObj).then(() => {
            sessionStorage.setItem("user", JSON.stringify(mergedObj));
          });
      }
    }
    return <MainPage setUsersData={setUsersData} />;
  }
}

const mapStateToProps = state => ({
  user: state.mainPage.user
});

const mapDispatchToProps = {
  setUsersData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPageContainer);
