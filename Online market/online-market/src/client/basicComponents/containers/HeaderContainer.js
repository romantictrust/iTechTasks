import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { clearStorage } from '../../store/MainPage/actions';

class HeaderContainer extends PureComponent {
  render() {
    return (
      <Header
        userData={this.props.user}
        clearStorage={this.props.clearStorage}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.mainPage.user,
});

const mapDispatchToProps = {
  clearStorage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
