import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Title from "../../../shared/components/Title";
import DoughnutChartContainer from "../containers/DoughnutChartContainer";
import FormDialogSell from "./FormDialogSell";

export default function Portfolio(props) {
  const {
    data,
    profit,
    userData,
    setUsersData,
    setProfitData,
    setPaymentOperation
  } = props;
  const user = userData;
  return (
    <>
      <Title>Portfolio</Title>
      <Grid container justify="space-around" alignItems="center">
        <Grid item>
          <Typography>
            Balance:
            {user.balance}
          </Typography>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={6}>
          {userData.materials.map((item, index) => (
            <Grid
              key={item.material}
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <Typography>
                  {item.material}:{item.amount}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  Bought for:
                  {item.cost}$
                </Typography>
              </Grid>
              <Grid item>
                <FormDialogSell
                  material={item.material}
                  materialIndex={index}
                  data={data}
                  profit={profit}
                  userData={userData}
                  setUsersData={setUsersData}
                  setProfitData={setProfitData}
                  setPaymentOperation={setPaymentOperation}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Divider orientation="vertical" />
        <Grid item>
          <DoughnutChartContainer />
        </Grid>
      </Grid>
    </>
  );
}
