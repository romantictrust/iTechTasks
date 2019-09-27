import React, { PureComponent } from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { clearStorage } from "../../store/MainPage/actions";

class HeaderContainer extends PureComponent {
  render() {
    return (
      <Header
        userData={this.props.user}
        clearStorage={this.props.clearStorage}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.mainPage.user
  };
};

const mapDispatchToProps = {
  clearStorage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
