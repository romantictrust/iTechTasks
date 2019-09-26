import React, { PureComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

export default class Profit extends PureComponent {
  render() {
    return (
      <div>
        <Title>Profit</Title>
        {this.props.profit.total ? (
          <div>
            <Typography>Total: {this.props.profit.total}</Typography>
            {this.props.profit.materials.map(item => {
              return (
                <Typography key={item.material}>
                  {item.material}: {item.profit}
                </Typography>
              );
            })}
          </div>
        ) : (
          <div>
            <Typography>No operations yet.</Typography>
          </div>
        )}
      </div>
    );
  }
}
