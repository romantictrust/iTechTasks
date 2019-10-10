import React, { PureComponent } from "react";
import { connect } from "react-redux";
import getMaterials from "../../../basicComponents/functions/getMaterials";
import { setMaterialData } from "../../../store/MainPage/actions";
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
  data: state.mainPage.data
});

const mapDispatchToProps = {
  setMaterialData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OperationsContainer);
