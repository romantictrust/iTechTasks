import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import Deposits from "../components/Deposits";
import useStyles from "../styles/TabPanelStyle";
import {
  setProfitData,
  setUsersData,
  setPaymentOperation,
  setMaterialData
} from "../../../store/MainPage/actions";
import { domen } from "../../../constants";

const socket = socketIOClient(domen);

export function DepositsContainer(props) {
  const classes = useStyles();
  const {
    user,
    setProfitData,
    setMaterialData,
    setUsersData,
    setPaymentOperation,
    data
  } = props;
  socket.on("updateMaterial", data => {
    setMaterialData(data);
  });
  return (
    <Grid container className={classes.operationBoxWrap}>
      {data.map((item, index) => (
        <Deposits
          key={item._id}
          materialsData={item}
          materialIndex={index}
          userData={user}
          setProfitData={setProfitData}
          setUsersData={setUsersData}
          setPaymentOperation={setPaymentOperation}
        />
      ))}
    </Grid>
  );
}

const mapStateToProps = state => ({
  data: state.mainPage.data,
  user: state.mainPage.user
});

const mapDispatchToProps = {
  setProfitData,
  setUsersData,
  setMaterialData,
  setPaymentOperation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositsContainer);
