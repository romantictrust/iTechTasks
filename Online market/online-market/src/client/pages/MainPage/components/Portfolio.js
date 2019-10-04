import React from "react";
import Typography from "@material-ui/core/Typography";
import Title from "../../../basicComponents/components/Title";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import DoughnutChartContainer from "../containers/DoughnutChartContainer";
import FormDialogSell from "../components/FormDialogSell";

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
          {props.userData.materials.map((item, index) => {
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
                  <FormDialogSell
                    material={item.material}
                    materialIndex={index}
                    data={props.data}
                    profit={props.profit}
                    userData={props.userData}
                    setUsersData={props.setUsersData}
                    setProfitData={props.setProfitData}
                    setPaymentOperation={props.setPaymentOperation}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Divider orientation="vertical" />
        <Grid item>
          <DoughnutChartContainer/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
