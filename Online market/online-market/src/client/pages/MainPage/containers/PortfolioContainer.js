import React, { PureComponent } from "react";
import Portfolio from "../components/Portfolio";
import { connect } from "react-redux";
import { setUsersData, setProfitData, setPaymentOperation } from "../../../store/MainPage/actions";

class PortfolioContainer extends PureComponent {
  render() {
    return (
      <Portfolio
        userData={this.props.user}
        data={this.props.data}
        profit={this.props.profit}
        setUsersData={this.props.setUsersData}
        setProfitData={this.props.setProfitData}
        setPaymentOperation={this.props.setPaymentOperation}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.mainPage.user,
    data: state.mainPage.data,
    profit: state.mainPage.profit
  };
};

const mapDispatchToProps = {
  setUsersData,
  setProfitData,
  setPaymentOperation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioContainer);
