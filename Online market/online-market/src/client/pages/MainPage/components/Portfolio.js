import React from "react";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import DoughnutChart from "../components/DoughnutChart";

export default function Portfolio(props) {
  const user = props.userData;
  return (
    <React.Fragment>
      <Title>Portfolio</Title>
      <Grid container justify="space-around" alignItems="center">
        <Grid item>
          <Typography>Balance: {user.balance}</Typography>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={6}>
          {props.userData.materials.map(item => {
            return (
              <Grid
                key={item.material}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <Typography>
                    {item.material}: {item.amount}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>Bought for: {item.cost}</Typography>
                </Grid>
                <Grid item>
                  <Link color="primary">Sell</Link>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Divider orientation="vertical" />
        <Grid item>
          <DoughnutChart data={user.materials} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
