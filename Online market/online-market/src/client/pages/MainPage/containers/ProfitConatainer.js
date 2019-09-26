import React, { PureComponent } from "react";
import Profit from "../components/Profit";
import { connect } from "react-redux";

class ProfitConatainer extends PureComponent {
  render() {
    return (
      <Profit
        profit={this.props.profit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    profit: state.mainPage.profit
  };
};

export default connect(
  mapStateToProps,
  null
)(ProfitConatainer);
