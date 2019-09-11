import React, { PureComponent } from "react";
import "../styles/Styles.css";

class InputsPannel extends PureComponent {
  onCityChange = event => {
    this.props.setCity(event.target.value);
  };

  getCityName = () => {
    console.log(this.props.city);
  };

  onDaysAmountChange = event => {
    this.props.setDaysAmount(event.target.value);
  };

  render() {
    return (
      <div className="inputsPannel">
        <form>
          <input
            type="text"
            className="input"
            placeholder="City"
            spellCheck={false}
            value={this.props.city}
            onChange={this.onCityChange}
          ></input>
          <input
            type="button"
            value="Sumbit city"
            className="button"
            onClick={this.getCityName}
          />
        </form>
        <div>
          <select
            className="select"
            value={this.props.city}
            onChange={this.onDaysAmountChange}
          >
            <option value={1}>Day</option>
            <option value={3}>3 days</option>
            <option value={5}>5 days</option>
          </select>
        </div>
      </div>
    );
  }
}
export default InputsPannel;
