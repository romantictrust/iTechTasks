import React, { PureComponent } from "react";
import InputsPannelContainer from "./InputsPannelContainer";
import HeaderWeatherInfoContainer from "./HeaderWeatherInfoContainer";
import MainWeatherInfoContainer from "./MainWeatherInfoContainer";
import { connect } from "react-redux";
import { setWeatherData } from "../../store/FetchWeatherAPI/actions";
import constants from "../../constants";

class FetchContainer extends PureComponent {
  getData = (city) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${constants.WEATHER_API_KEY}`
    )
      .then(response => response.json())
      .then(responseJson => this.formatSource(responseJson))
      .then(responseJson => {
        this.props.setWeatherData(responseJson);
      })
      .catch(error => {
        alert("Chosen city doesn't exist");
      });
  };

  formatSource = data => {
    for (let i = 0; i < data.list.length - 1; i++) {
      let nextData = data.list[i + 1];
      if (+nextData.dt_txt.substring(11, 13) !== 15) {
        data.list.splice(i + 1, 1);
        i--;
      }
    }
    data.list.forEach(item => {
      item.main.temp = `+${Math.floor(item.main.temp - 273.15)}°`;
    });
    return data;
  };

  render() {
    if (!this.props.weatherData) this.getData(this.props.city);
    return (
      <div className="page">
        <HeaderWeatherInfoContainer />
        <InputsPannelContainer />
        <MainWeatherInfoContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state.weatherInputs.city
  };
};

const mapDispatchToProps = { setWeatherData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchContainer);
