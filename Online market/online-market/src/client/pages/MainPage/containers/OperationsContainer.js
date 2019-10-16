import React, { PureComponent } from "react";
import { connect } from "react-redux";
import getMaterials from "../../../shared/functions/getMaterials";
import { setMaterialData } from "../../../shared/actions/index";
import Operations from "../components/Operations";

class OperationsContainer extends PureComponent {
  render() {
    const { data, setMaterialData } = this.props;
    if (!data) {
      getMaterials().then(res => {
        setMaterialData(res);
      });
    }
    return <Operations data={data} />;
  }
}

const mapStateToProps = state => ({
  data: state.shared.data
});

const mapDispatchToProps = {
  setMaterialData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OperationsContainer);
