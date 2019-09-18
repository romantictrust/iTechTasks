import React from "react";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import { Doughnut } from "react-chartjs-2";

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Portfolio</Title>
      <Grid container justify="space-around" alignItems="center">
        <Grid item>
          <Typography>Balance: 10,000$</Typography>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item>
          <Grid item>
            <Typography>Wood: 34 </Typography>
            <Link color="primary">Sell</Link>
          </Grid>
          <Grid item>
            <Typography>Iron: 45</Typography>
            <Link color="primary">Sell</Link>
          </Grid>
          <Grid item>
            <Typography>oil: 67</Typography>
            <Link color="primary">Sell</Link>
          </Grid>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item>
          <Doughnut data={{}} width={100} height={100} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
