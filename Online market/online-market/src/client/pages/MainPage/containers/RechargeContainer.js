import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Recharge from "../components/Recharge";
import { setUsersData } from "../../../shared/actions/index";

class RechargeContainer extends PureComponent {
  render() {
    const { user, setUsersData } = this.props;
    return (
      <Recharge user={user} setUsersData={setUsersData} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.shared.user
});

const mapDispatchToProps = {
  setUsersData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RechargeContainer);
