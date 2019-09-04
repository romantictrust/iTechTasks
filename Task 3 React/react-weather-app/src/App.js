import React, { Component } from "react";
import BlockTemplate from "./components/BlockTemplate";
import UpperTemplate from "./components/UpperTemplate";
import GLOBALS from "./Globals";
import * as Styles from "../src/styles/Styles";
import weatherHelper from "./functions/weatherHelper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fetched: false, dataSource: null, city: "Minsk",  value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, city: event.target.value});
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.city);
    event.preventDefault();
  }

  componentDidMount() {
    this.getData();
    weatherHelper();
  }

  getData = () => {
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

  upperBlock = () => {
    if (!this.state.fetched) {
      return <div>No data</div>;
    } else {
      return <UpperTemplate item={this.state.dataSource} />;
    }
  };

  blockList = () => {
    if (!this.state.fetched) {
      return <div>No data</div>;
    } else {
      return <BlockTemplate item={this.state.dataSource} />;
    }
  };

  render() {
    return (
      <div style={Styles.body}>
        <div style={Styles.page}>
          <div style={Styles.upper}>{this.upperBlock()}</div>
          <div style={Styles.lower}>
            <div style={Styles.head}>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  style={Styles.input}
                  placeholder="City"
                  name='city'
                  value={this.state.city}
                  onChange={this.handleChange}
                ></input>
                <input
                  type="submit"
                  value="Sumbit city"
                  style={Styles.button}
                />
              </form>
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
