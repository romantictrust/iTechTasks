import React, { PureComponent } from "react";
import MainPage from "../MainPage";
import { connect } from "react-redux";
import { setUsersData } from "../../../store/MainPage/actions";

class MainPageContainer extends PureComponent {
  render() {
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
