import React, { Component } from "react";
import * as Styles from "../styles/Styles";
import cloudWhite from "../styles/icons/cloudWhite.png" 

class UpperTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {item: this.props.item};
  }
  render(){
      return(
        <div style={Styles.upper}>
        <div><img src={cloudWhite} alt='White cloud'></img></div>
        <div>{this.state.item.name},
        {this.state.item.sys.country}<br></br>
        +{this.state.item.main.temp - 273.15}°<br></br></div>
        </div>
      )
  }
}
export default UpperTemplate;
