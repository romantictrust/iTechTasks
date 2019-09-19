import React, { PureComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

export default class Profit extends PureComponent {
  render() {
    return (
      <div>
        <Title>Profit</Title>
        <Typography>Total: -460.00$</Typography>
        <Typography>Wood: -700.00$</Typography>
        <Typography>Iron: 240.00$</Typography>
        <Typography>Oil: 220.00$</Typography>
      </div>
    );
  }
}
