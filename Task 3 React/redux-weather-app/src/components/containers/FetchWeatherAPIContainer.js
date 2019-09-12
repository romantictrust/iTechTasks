import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { setWeatherData } from '../../store/FetchWeatherAPI/actions';
import getData from '../../functions/getDataFromAPI';


class FetchWeatherAPIContainer extends PureComponent {
    
}

const mapStateToProps = state => {
    return {
        weatherData: state.fetchedData.weatherData
    };
  };

const mapDispatchToProps = {
    setWeatherData
}

export default connect( mapStateToProps, mapDispatchToProps)(FetchWeatherAPIContainer)