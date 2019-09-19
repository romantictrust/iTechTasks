import React from "react";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import DoughnutChart from '../components/DoughnutChart';

export default function Deposits(materialsData) {
  // const data = materialsData.materialsData;
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
            <Typography>Iron: 34 </Typography>
            <Link color="primary">Sell</Link>
          </Grid>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item>
          <DoughnutChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
