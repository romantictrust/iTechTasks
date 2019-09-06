import React, { PureComponent } from "react";
import * as Styles from "../styles/Styles";

class UpperTemplate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { dataSource: this.props.dataSource, cityData: this.props.cityData};
  }

  static getDerivedStateFromProps(newProps) {
    return {
      dataSource: newProps.dataSource, cityData: newProps.cityData
    };
  }

  render() {
    return (
      <div style={Styles.upper}>
        <div>
          <img src={`http://openweathermap.org/img/wn/${this.state.dataSource.weather[0].icon}@2x.png`} alt="White cloud"></img>
        </div>
        <div>
          {this.state.cityData.name},{this.state.cityData.country}
          <br></br>+{Math.floor(this.state.dataSource.main.temp - 273.15)}°<br></br>
        </div>
      </div>
    );
  }
}
export default UpperTemplate;
