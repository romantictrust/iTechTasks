import React, { Component } from "react";
import FetchContainer from "./components/containers/FetchContainer";

import store from "./store/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrap">
          <FetchContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
