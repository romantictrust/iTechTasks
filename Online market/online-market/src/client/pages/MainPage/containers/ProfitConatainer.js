import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Profit from "../components/Profit";

class ProfitConatainer extends PureComponent {
  render() {
    const { profit } = this.props;
    return <Profit profit={profit} />;
  }
}

const mapStateToProps = state => ({
  profit: state.mainPage.profit
});

export default connect(
  mapStateToProps,
  null
)(ProfitConatainer);
