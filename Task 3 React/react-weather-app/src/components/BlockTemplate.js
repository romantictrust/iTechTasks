import React, { Component } from "react";
import * as Styles from "../styles/Styles";

class BlockTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.dataSource,
      cityData: this.props.cityData
    };
  }
  static getDerivedStateFromProps(newProps) {
    return {
      dataSource: newProps.dataSource,
      cityData: newProps.cityData
    };
  }

  render() {
    return (
      <div style={Styles.block}>
        <div>
        <img style={Styles.cloudBlue} alt='Weather icon'
            src={`http://openweathermap.org/img/wn/${this.state.dataSource.weather[0].icon}@2x.png`}
          ></img>
        </div>
        <div>
          Place: {this.state.cityData.name},{this.state.cityData.country}
          <br></br>
          Temperature: +{Math.floor(this.state.dataSource.main.temp - 273.15)}°
          <br></br>
          Wind: {this.state.dataSource.wind.speed}
          <br></br>
          Date: {this.state.dataSource.dt_txt.substring(0, 10)}
          <br></br>
        </div>
      </div>
    );
  }
}
export default BlockTemplate;
