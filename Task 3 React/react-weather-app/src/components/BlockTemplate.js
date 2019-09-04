import React, { Component } from "react";
import * as Styles from "../styles/Styles";
import cloudBlue from "../styles/icons/cloudBlue.png" 

class BlockTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {item: this.props.item};
  }
  render(){
      return(
        <div style={Styles.block}>
        <div><img style={Styles.cloudBlue} src={cloudBlue} alt='Blue cloud'></img></div>
        <div>{this.state.item.name},
        {this.state.item.sys.country}<br></br>
        +{this.state.item.main.temp - 273.15}°<br></br></div>
        </div>
      )
  }
}
export default BlockTemplate;
