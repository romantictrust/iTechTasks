import React, { Component } from "react";
import BlockTemplate from "./components/BlockTemplate";
import UpperTemplate from "./components/UpperTemplate";
import GLOBALS from "./Globals";
import * as Styles from "../src/styles/Styles";
import weatherHelper from "./functions/weatherHelper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      dataSource: [],
      cityData: {},
      city: "",
      select: "1"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    this.getData(this.state.city);
    this.setState({ dataSource: this.state.dataSource });
    event.preventDefault();
  }

  selectChange(event) {
    this.setState({ select: event.target.value });
  }

  getData = (city = "Minsk") => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${GLOBALS.WEATHER_API_KEY}`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: this.formatSource(responseJson.list),
          cityData: responseJson.city,
          fetched: true
        });
      })
      .catch(error => {
        alert("Wrong city");
      });
  };

  formatSource = data => {
    for (let i = 0; i < data.length - 1; i++) {
      let currData = data[i];
      let nextData = data[i + 1];
      if (
        currData.dt_txt.substring(0, 10) === nextData.dt_txt.substring(0, 10) ||
        +nextData.dt_txt.substring(11, 13) !== 15
      ) {
        data.splice(i + 1, 1);
        i--;
      }
    }
    return data;
  };

  upperBlock = () => {
    if (!this.state.fetched) {
      return <div>No data</div>;
    } else {
      return (
        <UpperTemplate
          cityData={this.state.cityData}
          dataSource={this.state.dataSource[0]}
        />
      );
    }
  };

  blockList = () => {
    if (!this.state.fetched) {
      return <div>No data</div>;
    }
  };

  componentDidMount() {
    this.getData();
    weatherHelper();
  }

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
                  name="city"
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
                <select
                  style={Styles.select}
                  onChange={this.selectChange}
                  value={this.state.select}
                >
                  <option value={1}>Day</option>
                  <option value={3}>3 days</option>
                  <option value={5}>5 days</option>
                </select>
              </div>
            </div>
            <div style={Styles.main}>
              {this.blockList ? (
                this.state.dataSource
                  .slice(0, this.state.select)
                  .map((item, key) => {
                    return (
                      <BlockTemplate
                        key={key}
                        cityData={this.state.cityData}
                        dataSource={item}
                      />
                    );
                  })
              ) : (
                <div>No Data</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
