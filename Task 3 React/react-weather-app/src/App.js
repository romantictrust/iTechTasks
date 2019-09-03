import React, { Component } from "react";
import BlockTemplate from "./components/BlockTemplate";
import GLOBALS from "./Globals";
import * as Styles from "../src/styles/App";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fetched: false, dataSource: null, city: "Minsk" };
  }

  componentDidMount() {
    this.getBlock();
  }

  getBlock = () => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${GLOBALS.WEATHER_API_KEY}`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ dataSource: responseJson, fetched: true });
      })
      .catch(error => {
        console.error(error);
      });
  };

  headBlock = () => {};

  blockList = () => {
    if (!this.state.fetched) {
      return <div></div>;
    } else {
      return <BlockTemplate item={this.state.dataSource} />;
    }
  };

  render() {
    return (
      <div style={Styles.body}>
        <div style={Styles.page}>
          <div style={Styles.upper}></div>
          <div style={Styles.lower}>
            <div style={Styles.head}>
              {this.headBlock()}
              <div>
                <input style={Styles.input}></input>
              </div>
              <div>
                <button style={Styles.button}>Sumbit city</button>
              </div>
              <div>
                <select style={Styles.select}>
                  <option value="1">Day</option>
                  <option value="3">3 days</option>
                  <option value="5">5 days</option>
                </select>
              </div>
            </div>
            <div style={Styles.main}>{this.blockList()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
