import React, { PureComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Title from "../../../shared/components/Title";

export default class Profit extends PureComponent {
  render() {
    const { profit } = this.props;
    return (
      <div>
        <Title>Profit</Title>
        {profit.total ? (
          <div>
            <Typography>
              Total:
              {profit.total}
            </Typography>
            {profit.materials.map(item => (
              <Typography key={item.material}>
                {item.material}:{item.profit}
              </Typography>
            ))}
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
