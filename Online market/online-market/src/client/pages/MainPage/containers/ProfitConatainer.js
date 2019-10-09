import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Profit from '../components/Profit';

class ProfitConatainer extends PureComponent {
  render() {
    return (
      <Profit
        profit={this.props.profit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profit: state.mainPage.profit,
});

export default connect(
  mapStateToProps,
  null,
)(ProfitConatainer);
