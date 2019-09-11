import React, { PureComponent } from "react";

class MainWeatherInfo extends PureComponent {
  render() {
    return (
      <div className="weatherBlock">
        <div>
          <img
            className="cloudBlue"
            alt="Weather icon"
            // src={`http://openweathermap.org/img/wn/@2x.png`}
          ></img>
        </div>
        <div>
          <div>Place: ,</div>
          <div>Temperature:</div>
          <div>Wind: </div>
          <div>Date: </div>
        </div>
      </div>
    );
  }
}
export default MainWeatherInfo;
