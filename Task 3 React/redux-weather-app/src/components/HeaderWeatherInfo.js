import React, { PureComponent } from "react";

class HeaderWeatherInfo extends PureComponent {
  render() {
    return (
      <div className="header">
        <div>
          <img
            // src={`http://openweathermap.org/img/wn/@2x.png`}
            alt="White cloud"
          ></img>
        </div>
        <div>
          <div>,</div>
          <div></div>
        </div>
      </div>
    );
  }
}
export default HeaderWeatherInfo;
