import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Portfolio from "../components/Portfolio";
import {
  setUsersData,
  setProfitData,
  setPaymentOperation
} from "../../../store/MainPage/actions";

class PortfolioContainer extends PureComponent {
  render() {
    const {
      user,
      data,
      profit,
      setPaymentOperation,
      setProfitData,
      setUsersData
    } = this.props;
    return (
      <Portfolio
        userData={user}
        data={data}
        profit={profit}
        setUsersData={setUsersData}
        setProfitData={setProfitData}
        setPaymentOperation={setPaymentOperation}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.mainPage.user,
  data: state.mainPage.data,
  profit: state.mainPage.profit
});

const mapDispatchToProps = {
  setUsersData,
  setProfitData,
  setPaymentOperation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioContainer);
