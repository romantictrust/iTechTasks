import React, { Component } from "react";
import InputsPannelContainer from "./components/containers/InputsPannelContainer";
import HeaderWeatherInfoContainer from "./components/containers/HeaderWeatherInfoContainer";
import MainWeatherInfoContainer from "./components/containers/MainWeatherInfoContainer";

import store from "./store/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrap">
          <div className="page">
            <HeaderWeatherInfoContainer />
            <InputsPannelContainer />
            <MainWeatherInfoContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
