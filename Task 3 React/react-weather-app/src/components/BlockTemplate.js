import React, { Component } from "react";
import * as Styles from "../styles/App";
class BlockTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {item: this.props.item};
  }
  render(){
      return(
        <div style={Styles.block}>
        {console.log(this.state.item)}
        {this.state.item.name}<br></br>
        {this.state.item.sys.country}<br></br>
        {this.state.item.main.temp - 273.15}<br></br>
        {this.state.item.main.pressure}<br></br>
        </div>
      )
  }
}
export default BlockTemplate;
