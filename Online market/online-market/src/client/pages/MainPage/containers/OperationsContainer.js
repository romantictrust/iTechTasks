import React, { PureComponent } from "react";
import { connect } from "react-redux";
import getMaterials from "../../../basicComponents/functions/getMaterials";
import { setMaterialData } from "../../../store/MainPage/actions";
import Operations from "../components/Operations";

class OperationsContainer extends PureComponent {
  render() {
    if (!this.props.data)
      getMaterials().then(res => {
        this.props.setMaterialData(res);
      });
    return <Operations data={this.props.data} />;
  }
}

const mapStateToProps = state => {
  return {
    data: state.mainPage.data
  };
};

const mapDispatchToProps = {
  setMaterialData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OperationsContainer);
