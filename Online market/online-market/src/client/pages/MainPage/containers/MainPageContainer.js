import React, { Component } from 'react';
import MainPage from '../MainPage';
import { connect } from 'react-redux';
import { setMaterialData } from '../../../store/MainPage/actions';
import { materialsAPIurl } from '../../../constants';

class MainPageContainer extends Component {
  getData = () => {
    return fetch(materialsAPIurl)
        .then(response => response.json())
        .then(responseJson => {
            this.props.setMaterialData(responseJson);
        })
        .catch(error => {
          alert(error);
        });
  }

    render() {
        if (!this.props.data) this.getData()
        return (
            <MainPage/>
        );
    }
}

const mapStateToProps = state => {
    return {
      data: state.materials.data
    };
  };
  
  const mapDispatchToProps  = {
    setMaterialData
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPageContainer);

