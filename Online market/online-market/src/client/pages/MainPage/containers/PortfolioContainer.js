import React, { PureComponent } from "react";
import Portfolio from "../components/Portfolio";
import { connect } from "react-redux";
import { setUsersData } from "../../../store/MainPage/actions";

class PortfolioContainer extends PureComponent {
  render() {
    return (
      <Portfolio
        userData={this.props.user}
        setUsersData={this.props.setUsersData}
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
  setUsersData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioContainer);
