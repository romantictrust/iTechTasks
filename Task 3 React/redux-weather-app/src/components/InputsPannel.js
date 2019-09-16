import React, { PureComponent } from "react";
import "../styles/Styles.css";

class InputsPannel extends PureComponent {
  setOptions = (event) => {
    this.props.setCity(this.cityInput.value);
  };

  onDaysAmountChange = event => {
    this.props.setDaysAmount(Number(event.target.value));
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
            ref={(input) => { this.cityInput = input}}
          ></input>
          <input
            type="button"
            value="Sumbit city"
            className="button"
            onClick={this.setOptions}
          />
        </form>
        <div>
          <select
            className="select"
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
