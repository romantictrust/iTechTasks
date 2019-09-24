import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { materialsAPIurl } from "../../../constants";
import Operations from "../components/Operations";
import { setMaterialData } from "../../../store/MainPage/actions";

class OperationsContainer extends PureComponent {
  getData = () => {
    return fetch(materialsAPIurl)
      .then(response => response.json())
      .then(responseJson => {
        this.props.setMaterialData(responseJson);
      })
      .catch(error => {
        alert(error);
      });
  };
  render() {
    if (!this.props.data) this.getData();
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
